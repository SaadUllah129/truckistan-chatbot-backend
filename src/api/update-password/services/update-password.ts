/**
 * update-password service
 */

export default () => ({
  updatePasword: async (body: any) => {
    /* let password = body?.password;
    let uid = body?.uid;

    console.log("entry_magic_link", password, uid);
    try {

      const entry_magic_link = await strapi.query('api::magic-link.magic-link').findOne({
        where: {
          uid: uid,
        },
      });
      console.log("entry_magic_link", entry_magic_link);


      if (!entry_magic_link) {
        return {
          output: "Sorry, we couldn't find an account with that email address."
        }
      }
      let email = entry_magic_link?.email;
      let status = entry_magic_link?.status;
      let expiry = entry_magic_link?.expiry;
      let lastUpdateBy = entry_magic_link?.updatedAt;
      let now = new Date().getTime();
      let creation_time = new Date(lastUpdateBy).getTime();
      let difference = now - creation_time;
      difference = difference / 1000;
      difference = difference / 60;
      if (difference > expiry) {
        return {
          output: "Sorry, this link has expired. Please reach out to our administration for assistance."
        };
      }

      
      const user_record = await strapi.db.query('plugin::users-permissions.user').findOne({
        where: { email: email }
      })

      if (status ==="active")
      {
        return {
          output: "Your account has already been activated."
        };
       }

       console.log("user_record", user_record)
      const updatePassword = await strapi.query('api::magic-link.magic-link').update({
        data: {
          status: "active",
          expiry: 0
        },
        where: {
          uid: uid,
        },
      });

      let user;
      if (!user_record) {
        return {
          output: "Sorry, we couldn't find an account with that email address."
        }
      }
      user = await strapi.plugins['users-permissions'].services.user.edit(user_record?.id, { password:password });
      
      return {
        user,
        output:"You've successfully updated your password."
      }
    }
    catch (err) {
      console.log(err, "err");
      return err;
    } */
  }
});
