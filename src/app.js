const express=require('express');
const app=express();
const cookieParser = require("cookie-parser")
const cors = require("cors")
const authRoutes=require('./routes/auth');
const interviewRoutes=require('./routes/interview');
app.use(express.json());
app.use(cookieParser());
// app.use(cors({
//     origin: "http://localhost:5173",
//     credentials: true
// }));

app.use('/api/auth', authRoutes);
app.use('/api/interview', interviewRoutes)


module.exports=app;
