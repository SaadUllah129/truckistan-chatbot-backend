export default {
  routes: [
    {
     method: 'POST',
     path: '/update-password',
     handler: 'update-password.updatePassword',
     config: {
      policies: [],
      middlewares: [],
    },
    },
  ],
};
// 'global::request-mw'