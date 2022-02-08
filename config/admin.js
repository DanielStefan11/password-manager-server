module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '074360413cfc86f14b45ea57cd74ee0c'),
  },
});
