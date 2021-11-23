
import jwt from 'jsonwebtoken';

export const generateToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET || 'somethingsecret',
    {
      expiresIn: '30d',
    }
  );
};

export const isAuth = (req, res, next) => {
  const authorization = req.headers.authorization; // awa atuthorization wardagre la headere request
  if(authorization){ //wata agar exist bu
    const token = authorization.slice(7, authorization.length);  //it'll get rid of the bearer part(Bearer xxxxxx) wata la pash indexe 7 wardagre
    jwt.verify(token,
      process.env.JWT_SECRET || 'somethingsecret',
      (err,decode) =>{ // awa decrypte daka
      if(err){
        res.status(401).send({message: 'invalid token'})
    }else{
      req.user = decode; // decode datae usere haya damana req.user
      next();
    }
    });
  }else{
    res.status(401).send({message: 'no token'});
  }

};
 // la jwt sign passe dataman krdya loya la jwt verify decode aw datayanae haya