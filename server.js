const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const PORT = 3000;

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'acostalautaro08@gmail.com', // Coloca tu dirección de correo de Gmail
    pass: '43906806' // La contraseña de tu cuenta de Gmail
  }
});

app.use(express.json());

app.post('/send-email', (req, res) => {
  const {
    nombreUsuario,
    apellidoUsuario,
    fecha,
    hora,
    cantidadPersonas,
    nombrePersona,
    opcionMenu
  } = req.body;

  const mailOptions = {
    from: 'acostalautaro08@gmail.com', // Remitente
    to: 'acostalautaro08@gmail.com', // Destinatario
    subject: 'Detalles de la reserva en Casa Ruda',
    text: `Detalles de la reserva:\n
           Nombre: ${nombreUsuario} ${apellidoUsuario}\n
           Fecha: ${fecha}\n
           Hora: ${hora}\n
           Cantidad de personas: ${cantidadPersonas}\n
           Nombre de la persona: ${nombrePersona}\n
           Opción de menú elegida: ${opcionMenu}`
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
      res.status(500).send('Error al enviar el correo');
    } else {
      console.log('Correo enviado: ' + info.response);
      res.status(200).send('Correo enviado correctamente');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});