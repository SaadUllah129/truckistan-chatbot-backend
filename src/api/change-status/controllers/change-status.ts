/**
 * A set of functions called "actions" for `change-status`
 */

export default {

  async changeStatus(ctx, next) {
  try {
    // console.log("changeStatus")
    const body = ctx.request.body;
    const  data = await strapi
    .service("api::change-status.change-status")
    .changeStatus(body);
      ctx.body = { status: "ok", data};
  } catch (err) {
    ctx.badRequest("Post report controller error", { moreDetails: err });
  }
},
async updateUser(ctx, next) {
  try {
    // console.log("updateUser")
    const body = ctx.request.body;
    const  data = await strapi
    .service("api::change-status.change-status")
    .updateUser(body);
      ctx.body = { status: "ok", data};
  } catch (err) {
    ctx.badRequest("Post report controller error", { moreDetails: err });
  }
}
};
