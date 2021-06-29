import path from 'path';
import express from 'express';
import env from 'dotenv';
import MongoDB from './db.js';
import morgan from 'morgan';

import userRoutes from './routes/user.js';

const storeName = "MeroStore"

env.config();
MongoDB();

const app = express();

app.use(express.json());
app.get('/', (req, res) =>{
    res.send(storeName + "'s API is running...");
});

app.use('/api/v1/users', userRoutes);

// PORT 3000 is frontend
const PORT = process.env.PORT || 3001;
app.listen(PORT, console.log("Server running in/on " + PORT));