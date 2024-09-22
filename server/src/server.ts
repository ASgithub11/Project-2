const forceDatabaseRefresh = false;

import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import sequelize from './config/connection.js';
import routes from './routes/index.js';
import authRoutes from './routes/auth-routes.js';
import { eventRouter } from './routes/api/event-route.js'; 
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

// Serves static files in the entire client's dist folder
app.use(express.static('../client/dist'));

app.use(express.json());
app.use('/api', authRoutes);
app.use(routes);

// Add the event router for the /api/events route
app.use('/api/events', eventRouter);

sequelize.sync({force: forceDatabaseRefresh}).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
});
