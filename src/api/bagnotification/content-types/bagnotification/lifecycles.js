module.exports = {
  async afterCreate(event) {
    const { result } = event;
    try {
      await strapi.plugins["email"].services.email.send({
        to: "accessorizedbylisa@gmail.com",
        from: "demehin.george@gmail.com",
        bcc: "ibk2k7@gmail.com",
        subject: "New Bag Notification Request",
        text: `Content is loading...`,
        html: `<div>
                <h3>Hello Admin,</h3>
                <p style={{paddingBottom: '1rem'}}>One of your clients, ${result.userName}, will want to be notified when the below bag is back in stock </p>
                <p style={{paddingBottom: '0.5rem'}}><b>Name: ${result.name}</b></p>
                <p style={{paddingBottom: '1rem'}}><b>Color: ${result.color}</b></p>

                <p>You can send them a mail on ${result.userEmail}</p>
              </div>`,
      });
      // await strapi.plugins["email-designer"].services.email.send({
      //   templateReferenceId: "1",
      //   to: "ibk2k7@gmail.com",
      //   from: "demehin.george@gmail.com",
      //   replyTo: "demehin.george@gmail.com",
      //   subject: "New Bag Notification Request from code@gmail.com",
      //   data: {
      //     name: result.name,
      //     color: result.color,
      //     userName: result.userName,
      //   },
      // });
    } catch (err) {
      strapi.log.debug("📺: ", err);
      // return ctx.badRequest(null, err);
    }
  },
};
