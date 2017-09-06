import jwt from "jsonwebtoken";

const TOKENTIME = 60*60*24; // 1 Day

const generateToken = (args) => {
    return jwt.sign({
        data: args.id
    }, SECRET, { expiresIn: '1d' });
}

const validateToken = (args) => {
    var decoded = jwt.verify(args.token, SECRET);
    console.log(decoded);
    return decoded.foo
}

module.exports = {
    generateToken,
    validateToken
}