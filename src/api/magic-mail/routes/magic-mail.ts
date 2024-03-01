export default {
  routes: [
    {
     method: 'POST',
     path: '/magic-mail',
     handler: 'magic-mail.magicMail',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
