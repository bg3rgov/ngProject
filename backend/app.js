const express = require('express');
const mongoose = require('mongoose');
const {database} = require('./config');
// const userRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/taskRoutes');
// const projectRouter = require('./routes/projectRoutes');

const app = express();
mongoose.connect(
    //database.url, should be valid database connection string
    database.url, 
    {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true}
).then(() => {

    console.log('Connected to MongoDB');
}).catch(() => {

    console.log('Connection failed!');
})

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use((req, res, next) => {

    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
})
// app.use('/api/user', userRoutes);
app.use('/api/tasks', taskRoutes);
// app.use('/api/projects', projectRouter);

module.exports = app;
