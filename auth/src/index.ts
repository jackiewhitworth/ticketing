import mongoose from 'mongoose'; //install @types/mongoose if ts error occurs
import { app } from './app';

const start = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error('JWT_KEY must be defined');
  }
  try {
    await mongoose.connect('mongodb://auth-mongo-srv:27017/auth');
    console.log('connected to MongoDB')
  } catch (err) {
    console.error(err);
  }

  app.listen(3000, () => {
    console.log('listening on port 3000.');
  });
};

start();
