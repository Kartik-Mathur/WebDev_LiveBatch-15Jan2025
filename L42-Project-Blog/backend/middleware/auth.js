const jwt = require('jsonwebtoken');
module.exports = function (req, res, next) {
    const { token } = req.cookies;
    // if token is missing I cannot fetch userId, thus I cannot allow to add a
    // post
    if (!token) return res.status(404).json({
        message: 'Authentication Failed'
    })

    const tokenData = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Token Data", tokenData);

    req.userId = tokenData.id;

    next(); // if user is found so store its ID inside the token
    // and then we can actually fetch if anywhere by req.userId
}