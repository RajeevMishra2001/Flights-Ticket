require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

/* ================= EMAIL SETUP ================= */

const PORT = process.env.PORT || 5000;

const transporter = nodemailer.createTransport({

  service: 'gmail',

  auth: {

    user: 'rajeev13112001@gmail.com',

    pass: 'ohuy pbfe dcxd nfyb'

  }

});


/* ================= API ================= */

app.post('/flight-details', async (req, res) => {

  try {

    const {
      contactNumber, 
      fromCity,
      toCity,
      departureDate,
      returnDate,
      travellers
    } = req.body;

    console.log('Received Flight Details:', req.body);

    const text = `

    Contact Number : ${contactNumber}

    From City : ${fromCity}

    To City : ${toCity}

    Departure Date : ${departureDate}

    Return Date : ${returnDate}

    Travellers : ${travellers}

`;


    /* SEND EMAIL */

    await transporter.sendMail({

      from: 'rajeev.mishra07@zohomail.in',

      to: 'support@thetravelservicellc.com',

      subject: 'New Flight Booking',

      text: text

    });


    res.send({

      success: true,
      message: 'Email Sent Successfully'

    });

  }

  catch (error) {

    console.log(error);

    res.status(500).send({

      success: false,
      message: 'Email Failed'

    });

  }

});


app.post('/hotel-details', async (req, res) => {

  try {

    const {
     location,
      checkIn,
      checkOut,
      rooms,
      contactDetails
    } = req.body;

    console.log('Received Flight Details:', req.body);

    const text = `

    Contact Number : ${contactDetails}

    Location : ${location}

    CheckIn Date : ${checkIn}

    CheckOut Date : ${checkOut}

    Rooms  : ${rooms}

`;


    /* SEND EMAIL */

    await transporter.sendMail({

      from: 'rajeev13112001@gmail.com',

      to: 'rajeev.mishra07@zohomail.in',

      subject: 'New Hotel Booking',

      text: text

    });


    res.send({

      success: true,
      message: 'Email Sent Successfully'

    });

  }

  catch (error) {

    console.log(error);

    res.status(500).send({

      success: false,
      message: 'Email Failed'

    });

  }

});






app.get('', (req, res) => {

  res.send('Flight Booking API is running');

});


app.listen(PORT, () => {

  console.log(`Server running on port ${PORT}`);

});