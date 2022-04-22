const jwt = require('jsonwebtoken');
const config = require('./config');

const auth = (req, res, next) => {
    try {
        const token = req.headers.token
        const decode = jwt.verify(token, config.jwt.secret)
        console.log(decode)
        next();
    } catch (err) {
        res.status(401).json({
            msg: "Not authorized"
        });
    }
}

module.exports = auth;
