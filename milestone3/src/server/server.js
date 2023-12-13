"use strict";

import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors'

import productRouter from './routes/productRoutes.js';
import userRouter from './routes/userRoutes.js';
import couponRouter from './routes/couponRoutes.js';

const app = express();
app.use(bodyParser.json());
app.use(cors(
    {
        origin: 'http://localhost:3000'
    })
);
  

const PORT = 8000;
app.set('port', PORT);

// Connect to MongoDB
mongoose
    .connect('mongodb+srv://gustavohitomi:hTgGdqldKyyouFGJ@cluster0.pkyx42h.mongodb.net/',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() =>
    {
        console.log('Connected to MongoDB');
    })
    .catch((error) =>
    {
        console.error('Error connecting to MongoDB:', error.message);
    });

app.use('/', productRouter);
app.use('/', userRouter);
app.use('/', couponRouter);

// Start the server
app.listen(PORT, () => 
{
    console.log(`Server is running on port ${PORT}`);
});
