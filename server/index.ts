import * as express from 'express';
import * as cors from 'cors';
import * as path from 'path';
import * as cron from 'node-cron';
import axios from 'axios';

const app = express();
const PORT = 3000;
let energyData = null;  // Store fetched data

app.use(cors());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

const fetchDataFromAPI = async () => {
  try {
    const response = await axios.get('https://cea.nic.in/api/psp_peak.php');
    energyData = response.data;
    console.log('Data fetched from API');
  } catch (error) {
    console.error('Failed to fetch data:', error);
  }
};

// Schedule fetchDataFromAPI to be called at 00:00 on the first day of every month
cron.schedule('0 0 1 * *', fetchDataFromAPI);

// Initial fetch
fetchDataFromAPI();

app.get('/api/energy', (req, res) => {
  if (energyData) {
    res.json(energyData);
  } else {
    res.status(500).json({ error: 'Data not available' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});