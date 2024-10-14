export const environment = {
  production: false,
  apiUrl: import.meta.env.NG_APP_API_BASE_URL,
  endpoints: {
    getAllProperties: `/properties`,
    getShowProperties: (id: string) => `/properties/${id}`,
  },
};
