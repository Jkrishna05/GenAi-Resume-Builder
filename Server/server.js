import app from './src/app.js';
import dotenv from 'dotenv';
import dbConnect from './src/config/db.js';

dotenv.config();
await dbConnect();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} http://localhost:${PORT}`);
});