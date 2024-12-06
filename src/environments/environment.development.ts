export const environment = {
  production: false,
  // apiUrl: import.meta.env.NG_APP_API_BASE_URL,
  apiUrl: 'http://localhost/api/v1',
  endpoints: {
    properties: {
      GET_ALL_PROPERTY: `/properties`,
      POST_STORE_PROPERTY: `/properties`,
      DELETE_PROPERTY: (id: string) => `/properties/${id}`,
      GET_SHOW_PROPERTY: (id: string) => `/properties/${id}`,
      PUT_UPDATED_PROPERTY: (id: string) => `/properties/${id}`,
      GET_FOR_ME_PROPERTY: `/properties/me`,
      POST_STORE_IMAGE: (id: string) => `/properties/${id}/images`,
      DELETE_STORE_IMAGE: (id: string) => `/properties/${id}/images`,
    },
    auth: {
      LOGIN: `/login`,
      REGISTER: `/register`,
      LOGOUT: `/logout`,
      FORGOT_PASSWORD: `/forgot-password`,
      RESET_PASSWORD: `/reset-password`,
      VERIFY_EMAIL: (id: string, hash: string) => `/verify-email/${id}/${hash}`,
    },
    favorites: {
      GET_ALL_COUNT: `/favorites`, // REVOIR LOGIQUE BACK
      POST_ADD_FAVORITE: (property_id: string) => `/favorites/${property_id}`,
      DELETE_FAVORITE: (property_id: string) => `/favorites/${property_id}`,
    },
    agencies: {
      GET_ALL_AGENCY: `/agencies`,
      POST_STORE_AGENCY: `/agencies`,
      GET_SHOW_AGENCY: (id: string) => `/agencies/${id}`,
      UPDATED_AGENCY: (id: string) => `/agencies/${id}`,
      DELETE_AGENCY: (id: string) => `/agencies/${id}`,
    },
  },
};
