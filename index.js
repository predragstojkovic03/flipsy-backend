const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const connectDB = require('./config/db');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');

const userRoutes = require('./routes/userRoutes');
const subjectRoutes = require('./routes/subjectRoutes');

dotenv.config();
connectDB();

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Api is running...');
});

app.use('/api/users', userRoutes);
app.use('/api/subjects', subjectRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log('Server is listening on port ' + PORT);
});
