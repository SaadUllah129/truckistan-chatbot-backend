/**
 * A set of functions called "actions" for `update-password`
 */

export default {
  async updatePassword(ctx, next) {
    try {
      //console.log(ctx)
      const body = ctx.request.body;
      const  data = await strapi
      .service("api::update-password.update-password")
      .updatePasword(body);
        ctx.body = { status: "ok", data};
    } catch (err) {
      ctx.badRequest("Post report controller error", { moreDetails: err });
    }
  }
};
