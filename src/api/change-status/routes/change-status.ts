export default {
  routes: [
    {
     method: 'POST',
     path: '/change-status',
     handler: 'change-status.changeStatus',
     config: {
       policies: [],
       middlewares: [],
     },
    },
    {
      method: 'PUT',
      path: '/update-user',
      handler: 'change-status.updateUser',
      config: {
        policies: [],
        middlewares: [],
      },
     },
  ],
};
