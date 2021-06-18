const dotenv = require('dotenv');
const mailServer = require('../services/mailServer');

const sendMail = async (req, res, next) => {
  try {
    const { name, email, phone, reason, message } = req.body;

    console.log(name)

    const body = `
    Nome: ${name}
    Email: ${email}
    Telefone: ${phone}
    Motivo: ${reason}
    Mensagem: ${message}
    `;

    await mailServer({
      destinationUser: process.env.EMAIL,
      subjectText: reason,
      textOption: body,
    });

    res.status(200).send('Everything is alright');
  } catch (error) {
    res.status(500).send('Ops, something is wrong');
    console.log(error);
  }
};

module.exports = sendMail;