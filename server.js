const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  // Configure your email transport (use your real email and app password)
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'mwawasijulai@gmail.com',
      pass: 'mfvu iflz nxde jrsc ' // Use an app password if 2FA is enabled
    }
  });

  try {
    await transporter.sendMail({
      from: email,
      to: 'mwawasijula@gmail.com',
      subject: `New message from ${name}`,
      text: message
    });
    res.status(200).json({ message: 'Message sent!' });
  } catch (err) {
    res.status(500).json({ message: 'Error sending message.' });
  }
});

app.listen(3001, () => console.log('Server running on port 3001'));