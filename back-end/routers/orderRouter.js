import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Order from '../models/orderModel.js';
import { isAuth } from '../utils.js';


const orderRouter = express.Router();


orderRouter.post('/',
 isAuth,
expressAsyncHandler( async (req, res) =>{
if(req.body.orderItems.length === 0){
    res.status(400).send({message: 'cart is empty'});
}else{
    const order = new Order({
        orderItems: req.body.orderItems,
        shippingAddress: req.body.shippingAddress,
        paymentMethod: req.body.paymentMethod,
        itemsPrice: req.body.itemsPrice,
        totalPrice: req.body.totalPrice,
        taxPrice: req.body.taxPrice,
        shippingPrice: req.body.shippingPrice,
        user: req.user._id,
    });
   const createdOrder = await order.save();
   res.status(201).send({message: 'new order created' ,order: createdOrder});
}
}));

orderRouter.get('/:id', isAuth, expressAsyncHandler( async (req, res) =>{
const order = await Order.findById(req.params.id);
if(order){
    res.send(order);
}else{
    res.status(404).send({message: 'order not found'});
}
}))
orderRouter.put('/:id/pay', isAuth, expressAsyncHandler( async (req, res) =>{
const order = await Order.findById(req.params.id); //to get order 
if(order){ // agar order habu update e ordere bka
    order.isPaid = true;
    order.PaidAt = Date.now();
    order.paymentResult = { // save e aw propertyana daka
     id: req.body.id,
     status: req.body.status,
    update_time: req.body.update_time,
    email_address: req.body.email_address, };
const updatedOrder = await order.save();
res.send({message:'Order Paid', order: updatedOrder});
}else{
res.status(404).send({message: 'order not found'});
}
})
);

export default orderRouter;

