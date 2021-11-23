import express from 'express';
import mongoose from 'mongoose';
import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js';
import dotenv from 'dotenv';
import orderRouter from './routers/orderRouter.js';
dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
mongoose.connect('mongodb+srv://sargull:flowerpetals78@cluster0.sigxf.mongodb.net/selffless?retryWrites=true&w=majority');


app.use('/api/orders', orderRouter);
app.use('/api/users', userRouter);
app.use('/api/products', productRouter);

app.get('/api/config/paypal', (req,res) =>{
    res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
})
app.get('/', (req,res) =>{
res.send('server is ready');
});

   app.use((err,req,res,next) =>{
    res.status(500).send({message:err.message});
   });


const port=process.env.PORT|| 5000;
app.listen(port,()=>{
    console.log(`serve at http://localhost:${port}`);
});