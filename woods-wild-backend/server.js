const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const campingSpotRoutes = require('./routes/campingSpotRoutes');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/camping-spots', campingSpotRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

