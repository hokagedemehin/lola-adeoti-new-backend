// path: ./config/plugins.js

module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  // email: {
  //   config: {
  //     provider: "nodemailer",
  //     providerOptions: {
  //       host: env("SMTP_HOST", "smtp.example.com"),
  //       port: env("SMTP_PORT", 587),
  //       auth: {
  //         user: env("SMTP_USERNAME"),
  //         pass: env("SMTP_PASSWORD"),
  //       },
  //       // ... any custom nodemailer options
  //     },
  //     settings: {
  //       defaultFrom: "ibk2k7@gmail.com",
  //       defaultReplyTo: "ibk2k7@gmail.com",
  //     },
  //   },
  // },
  email: {
    config: {
      provider: "amazon-ses",
      providerOptions: {
        key: env("AWS_SES_KEY"),
        secret: env("AWS_SES_SECRET"),
        amazon: "https://email.us-east-1.amazonaws.com",
      },
      settings: {
        defaultFrom: "demehin.george@gmail.com",
        defaultReplyTo: "demehin.george@gmail.com",
      },
    },
  },
  // ...
});
