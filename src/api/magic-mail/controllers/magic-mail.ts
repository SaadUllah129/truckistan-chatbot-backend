/**
 * A set of functions called "actions" for `magic-mail`
 */

export default {

  async magicMail(ctx, next) {
    try {
      //console.log(ctx)
      const body = ctx?.request?.body;
      const jwt_token = ctx.headers.authorization.split(' ').at(1);
      const data = await strapi
        .service("api::magic-mail.magic-mail")
        .magicMail({ ...body, jwt_token });
      ctx.body = { status: "ok", data };
    } catch (err) {
      ctx.badRequest("Post report controller error", { moreDetails: err });
    }
  }
};
