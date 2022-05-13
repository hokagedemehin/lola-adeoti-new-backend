module.exports = {
  async afterCreate(event) {
    const { result } = event;
    try {
      await strapi.plugins["email"].services.email.send({
        to: "accessorizedbylisa@gmail.com",
        from: "demehin.george@gmail.com",
        bcc: "ibk2k7@gmail.com",
        subject: "A new review is awaiting your approval",
        text: `Content is loading...`,
        html: `<div>
                <h3>Hello Admin,</h3>
                <p style={{paddingBottom: '1rem'}}>
                  There is a new review for ${result.bagName} that is awaiting your approval. Below is what the client has to say and their star rating
                </p>

                <p style={{paddingBottom: '0.5rem'}}><b>Stars: ${result.rating}</b></p>
                <p><b>Review: ${result.content}</b></p>
                <p> Kindly Check the backend database to confirm this review</p>
                <p>Thank you</p>
              </div>`,
      });
    } catch (error) {
      console.error(error);
    }
  },
};
