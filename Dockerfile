# ETAPE 1: Construire l'application
FROM node:20-alpine AS node-builder

ARG APP_NAME=ll-frontend
ARG ENVIRONMENT=production
ARG NG_VERSION=17

ENV APP_NAME=$APP_NAME
ENV ENVIRONMENT=$ENVIRONMENT
ENV NG_VERSION=$NG_VERSION

WORKDIR /app

# Copier uniquement les fichiers de dépendances pour un cache plus efficace
COPY package*.json ./

RUN npm install -g @angular/cli@$NG_VERSION
RUN npm install --legacy-peer-deps

COPY . .

RUN ng build --configuration=$ENVIRONMENT --output-path=dist/

# ETAPE 2: Héberger l'application sur un serveur web nginx
FROM nginx:alpine
EXPOSE 80

WORKDIR /usr/share/nginx/html

# Si nécessaire, on vide le répertoire html
RUN rm -rf /usr/share/nginx/html/*
RUN chmod -R 755 /usr/share/nginx/html
RUN chown -R nginx:nginx /usr/share/nginx/html


# Copier les fichiers générés par Angular
COPY --from=node-builder /app/dist/browser/ /usr/share/nginx/html

# Copier la configuration nginx
COPY --from=node-builder /app/nginx.conf /etc/nginx/conf.d/default.conf
