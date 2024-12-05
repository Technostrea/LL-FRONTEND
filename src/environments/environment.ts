export const environment = {
  production: true,
  apiUrl: import.meta.env.NG_APP_API_BASE_URL || 'http://localhost/api/v1',
  endpoints: {
    getAllProperties: `/properties`,
    getShowProperties: (id: string) => `/properties/${id}`,
  },
};
