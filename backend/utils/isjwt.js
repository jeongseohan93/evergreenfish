const jwt = require('jsonwebtoken');

exports.isjwt = ( req, res, next ) => {
    
    const { email, nick } = req.authData;
   
    const payload = {email, nick};
    const token = jwt.sign(
    payload,
    process.env.JWT_SECRET,
    { expiresIn: '1h'}

    );
    
    return res.json({success: true, token});
}
