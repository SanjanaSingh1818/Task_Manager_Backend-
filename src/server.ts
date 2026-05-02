import express from 'express';
import cors from 'cors';
import dns from 'dns';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoutes from './routes/auth';
import projectRoutes from './routes/projects';
import taskRoutes from './routes/tasks';
import userRoutes from './routes/users';

dotenv.config();

dns.setServers(['8.8.8.8', '1.1.1.1']);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const connectDB = async () => {
  try {
    console.log('Attempting MongoDB connection...');
    console.log('MONGO_URI loaded:', process.env.MONGO_URI ? '✓ (hidden for security)' : '✗ NOT FOUND');

    if (!process.env.MONGO_URI) {
      throw new Error('MONGO_URI environment variable is not set');
    }

    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000,
    });

    console.log('✓ MongoDB connected successfully');
  } catch (err) {
    console.error('✗ MongoDB connection error:');
    if (err instanceof Error) {
      console.error('  Message:', err.message);
      if (err.message.includes('querySrv ECONNREFUSED')) {
        console.error('  Hint: DNS SRV lookup failed. If you are on a restricted network, try using a standard mongodb:// Atlas connection string or configure DNS to allow SRV queries.');
      }
    } else {
      console.error('  Error:', err);
    }
    process.exit(1);
  }
};

connectDB();

app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/users', userRoutes);

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
