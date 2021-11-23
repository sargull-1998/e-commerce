import bcrypt from 'bcryptjs';
const data = {
    users:[
{
    name: 'sargull',
    email: 'admin@gmail.com',
    password: bcrypt.hashSync('1998', 8),
    isAdmin: true,
},
{
    name: 'lana',
    email: 'user@gmail.com',
    password: bcrypt.hashSync('1998', 8),
    isAdmin: false,
}
    ],

products:[
{
    
    name: 'Niacinamide & Maracujá Daily Barrier Support Moisturizer',
    category: 'moisturizer',
    image: '/images/p8.jpg',
    price: 28,
    rating: 5,
    countInStock:6,
    numReviews:31,
    description:' Lightweight nourishment for stronger, healthy skin,Best for oily, combination and acne prone skin​'
},
{
    
    name: 'Mandelic Acid & Rice Bran Gentle Exfoliating Serum',
    category: 'serum',
    image: '/images/r1.png',
    price: 24,
    rating: 4.5,
    countInStock:4,
    numReviews:17,
    description:'Improves skin texture for smoother, brighter looking skin,great for all skin types'
},
{
    
    name: 'Centella & Green Tea Hydrating Gel Cleanser',
    category: 'cleanser',
    image: '/images/r2.jpg',
    price: 20,
    rating: 5,
    countInStock:20,
    numReviews:76,
    description:'Hydrating deep clean for all skin typeseasy to use, and effectively cleanses the skin without drying or stripping.'
},
{
    
    name: 'Salicylic Acid & Sea Kelp Pore Clearing and Oil Control Serum',
    category: 'serum',
    image: '/images/p4.jpg',
    price: 24,
    rating: 4.0,
    countInStock:33,
    numReviews:44,
    description:'Targets and helps prevent future breakouts without irritation,Best for oily and breakout prone skin'
},
{
    
    name: 'Retinol & Rainbow Algae Repair Serum',
    category: 'serum',
    image: '/images/r3.jpg',
    price: 30,
    rating: 4.0,
    countInStock:0,
    numReviews:56,
    description:'Gently targets post-acne marks and hyperpigmentation,Suitable for all skin types. Best for acne or hyperpigmentation prone skin.'
},
],
}
export default data;