/**
 * change-status service
 */

export default () => ({
  changeStatus: async (body) => {

    let password = body?.password;
    let uid = body?.uid;

    try {
      const entry_cust_user: any = await strapi.query("plugin::users-permissions.user").findOne({
        where: {
          uid: uid
        }
      });
      if (!entry_cust_user) {
        return {
          output: "User doesn't exist."
        }
      }
      // check if the link is already opened or not
      //let id = entry_magic_link[0].id;
      let status = entry_cust_user?.status;
      let expiry = entry_cust_user?.expiry;
      let createdAt = entry_cust_user?.createdAt;
      let now = new Date().getTime();
      let creation_time = new Date(createdAt).getTime();
      let difference = now - creation_time;
      difference = difference / 1000;
      difference = difference / 60;
      if (difference > expiry) {
        return {
          output: "This link has expired. please contact to administration"
        };
      }
      //console.log("difference: -----------------------", JSON.stringify(difference));
      //console.log("now: -----------------------", JSON.stringify(now));

      if (status === "active") {
        return {
          output: "This account is already Activated"
        };
      }
      let update_user = await strapi.plugins['users-permissions'].services.user.edit(
        entry_cust_user?.id,
        {
          status: 'active',
          password: password,
          expiry: 0
        });

      //console.log(user,"user===============>")

      return {
        update_user,
        output: "You've successfully set a new password."
      }
    }
    catch (err) {
      //console.log(err);
      return err;
    }
  },

  updateUser: async (body) => {

    let customer = body?.customer;
    let hub = body?.hub;
    let mobile = body?.mobile;
    let user_role = body?.user_role;
    let email = body?.email;
    let dc_cost = body?.dc_cost;
    let username = body?.username;

    try {
      console.log(customer, hub, mobile, user_role);

      let dataObj = {
        mobile:mobile,
        phone:mobile,
        dc_cost: dc_cost,
      }

      if(user_role !== null && user_role !== undefined){
        dataObj["t_user_role"] = {
          connect: [user_role]
        }
      }
      if(hub !==null && hub !== undefined){
        dataObj["hub"] = {
          connect: [hub]
        } 
      }

      if(customer !==null && customer !==undefined){
        dataObj["customer"] = {
          connect: [customer]
        } 
      } 


      console.log(dataObj,"dataObj")

      let update_cust_user = await strapi.db.query('api::cust-user.cust-user').update({
        where: { email: email },
        data: dataObj,
      });
      // let update_user = await strapi.db.query('api::user.user').update({
      //   where: { email: email },
      //   data: {
      //     dc_cost: dataObj?.dc_cost,
      //   },
      // });
      let user_id = await strapi.plugins['users-permissions'].services.user.fetchAll()

      const user = user_id?.find((cons: any) => {
        return (cons?.email === email);
      });
      // console.log(user, "user")
      // return user
      try {
        let update_user = await strapi.plugins['users-permissions'].services.user.edit(
          user?.id,
          dataObj);
        console.log(update_user, "update_user")
        return {
          update_user,
          output: "You've successfully set a new password."
        };
      } catch (error) {
        console.log(error,"error")
        return error
      }



    }
    catch (err) {
      //console.log(err);
      return err;
    }
  }

});
