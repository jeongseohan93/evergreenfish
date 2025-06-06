const User = require('../models/user');
const bcrypt = require('bcrypt');
const passport = require('passport');
const { v4: uuidv4} = require('uuid');

exports.idcheckr = async ( req, res ) => {
    try {
    const { email } = req.body;
    
    if (!email) {
            return res.status(400).json({ message: 'email이 필요합니다.' });
        }
    
    const userCheck = await User.findOne( { where: {email},
                                                attributes: ['email']});

    if(userCheck){
        return res.status(409).json({ message: '가입된 이메일입니다.' });
    } 
    
    return res.status(200).json({ message: '가입된 이메일이 아닙니다.' });
    
    } catch (err) {
        console.error("아이디 체크 오류:", err);
        return res.status(500).json({ message: '서버 오류' });
    } 

}

exports.register = async (req, res ) => {
    
    const {
        email,
        password,
        confirmPassword,
        name,
        phone,
        address
    } = req.body;
    
    const exUser = await User.findOne({ where: { email } });
    if (exUser) {
        return res.status(409).json({ message: '이미 가입된 이메일입니다.' });
    }

    try {
        const hash = await bcrypt.hash(password, 12);
        await User.create({
            user_uuid: uuidv4(),
            email,
            password: hash,
            name,
            phone,
            address 
        });
        return res.status(201).json({ message: '회원가입 성공' });
    }catch (error) {
        console.error(error);
        return res.status(500).json({ message: '서버 에러 발생' });
    }
}


exports.login = async (req, res, next) => {
    
    const { email, password } = req.body;
    if (!email || !password) {
    return res.status(400).json({ message: '이메일과 비밀번호를 모두 보내주세요.' });
    }
    try{
    const exUser = await User.findOne({
        where: { email },
        attributes: ['email', 'password', 'name'],
    });

    if(!exUser) {
        return res.status(401).json({message: '가입 x'});
    }

    const hash = await bcrypt.compare(password, exUser.password);
    
    if(!hash) {
        return res.status(401).json({message: '비밀번호가 틀려요~'});
    }
        req.authData = {email: exUser.email, nick: exUser.nick };
        return next();
    } catch (err) {
        return next(err);
    }
};
