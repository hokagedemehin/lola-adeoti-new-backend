module.exports = {
  async afterCreate() {
    try {
      await strapi.plugins["email"].services.email.send({
        to: "accessorizedbylisa@gmail.com",
        from: "demehin.george@gmail.com",
        bcc: "ibk2k7@gmail.com",
        subject: "New Promo & Deals Subscription",
        text: `Content is loading...`,
        html: `<div>
                <h3>Hello Admin,</h3>
                <p style={{paddingBottom: '1rem'}}>
                  There is a new clients that wants to be notified when there is any promo or deals.
                </p>
                <p> Check the backend database, promo collection, for the updated list</p>
              </div>`,
      });
    } catch (error) {
      console.error(error);
    }
  },
};
