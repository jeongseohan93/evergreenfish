const User = require('../models/user');
const bcrypt = require('bcrypt');
const passport = require('passport');


exports.join = async (req, res, next) => {
    
    const { nick, email, password } = req.body;
    
    const exUser = await User.findOne({ where: { email } });
    if (exUser) {
        return res.status(409).json({ message: '이미 가입된 이메일입니다.' });
    }

    try {
        const hash = await bcrypt.hash(password, 12);
        await User.create({
            email,
            nick,
            password: hash,
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
        attributes: ['email', 'password', 'nick'],
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
