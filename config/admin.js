module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd7cc05c1663869d88ebb46d590947e8a'),
  },
});
