const nodemailer = require("nodemailer");

class MailerService {
  constructor() {
    this.transport = this.config();
  }

  config = () =>
    nodemailer.createTransport({
      host: "smtp.gmail.com",
      auth: {
        user: "osid.alsagheer@gmail.com",
        pass: "xlxkxzcwarjriyjr"
      }
    });

  sendMail = mail => {
    this.transport.sendMail(mail);
  };

  welcomeMailContent = userMail => ({
    from: 'abo sagir',
    to: userMail,
    subject: "Welcome to SyTicket",
    html:
      "<p>Hi</p>" 
      
  });
}

module.exports = new MailerService();
