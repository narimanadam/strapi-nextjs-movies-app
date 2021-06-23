module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"),
    },
  },
  // url: "https://db80437077a5.ngrok.io",
});
