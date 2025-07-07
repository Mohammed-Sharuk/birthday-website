const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// POST /api/answers
router.post('/', async (req, res) => {
  const { question, answer } = req.body;

  if (!question || !answer) {
    return res.status(400).json({ error: 'Question and answer required' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,      // your email
        pass: process.env.GMAIL_PASS       // app password
      }
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: 'rawther7686@gmail.com',
      subject: '💬 New Answer Received',
      text: `Question: ${question}\n\nAnswer: ${answer}`
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Answer emailed successfully!' });
  } catch (err) {
    console.error('Email send error:', err);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

module.exports = router;
