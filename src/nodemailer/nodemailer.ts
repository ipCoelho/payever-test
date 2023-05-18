import nodemailer from 'nodemailer';

export const transport = nodemailer.createTransport({
  host: 'sandbox.smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '584b82a48f3274',
    pass: '4ed6de5304ca52',
  },
});
