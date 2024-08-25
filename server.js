const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');  // Import CORS

const app = express();

// Enable CORS for all routes
app.use(cors());  // Add CORS here

// Parse incoming JSON requests
app.use(bodyParser.json());

// POST /bfhl endpoint
app.post('/bfhl', (req, res) => {
  const { data } = req.body;
  const userId = 'Sarthak Tanwar'; 
  const email = 'sarthak.tanwar2021@vitstudent.ac.in'; 
  const rollNumber = '21BCE2234'; 

  let numbers = [];
  let alphabets = [];
  let highestLowercase = null;

  data.forEach(item => {
    if (!isNaN(item)) {
      numbers.push(item);
    } else if (typeof item === 'string' && item.length === 1) {
      alphabets.push(item);
      if (item === item.toLowerCase()) {
        if (!highestLowercase || item > highestLowercase) {
          highestLowercase = item;
        }
      }
    }
  });

  res.json({
    is_success: true,
    user_id: userId,
    email: email,
    roll_number: rollNumber,
    numbers: numbers,
    alphabets: alphabets,
    highest_lowercase_alphabet: highestLowercase ? [highestLowercase] : []
  });
});

// GET /bfhl endpoint
app.get('/bfhl', (req, res) => {
  res.json({ operation_code: 1 });
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});