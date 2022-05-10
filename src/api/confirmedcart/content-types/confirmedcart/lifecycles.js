module.exports = {
  async afterCreate(event) {
    const { result } = event;
    try {
      await strapi.plugins["email"].services.email.send({
        to: "ibk2k7@gmail.com",
        from: "demehin.george@gmail.com",
        subject: `New Bag Order - ${result.transactionId}`,
        text: `Content is loading...`,
        html: `<div>
                <h3>Hello Admin,</h3>
                <p style={{paddingBottom: '1rem'}}>You have a new order to fulfill.</p>
                <p>More details can be found in the backend. Please check for ID #${result.id} in the confirmedCart collection type</p>
                <h4>Quick Summary</h4>
                <p>Name: ${result.firstName} ${result.lastName}</p>
                <p>Amount: </p>
                <p>Phone No: ${result.phoneNumber}</p>
                <p>Email: ${result.emailAddress}</p>
                <p>Address: ${result.deliveryAddress}</p>
                <p>Country: ${result.country}</p>
                <p>State: ${result.state}</p>
                <p>Amount: ${result.currency} ${result.amount}</p>

                <p>Also remember to change the order status when the order is out for delivery and finally when it is delivered</p>
              </div>`,
      });
    } catch (error) {
      console.error(error);
    }
  },
};
