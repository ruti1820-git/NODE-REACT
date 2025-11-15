const jwt = require("jsonwebtoken")
const verifyJWT = (req, res, next) => {
    const authHedear = req.headers.Authorization || req.headers.authorization
    console.log({authHedear});
    if (!authHedear?.startsWith("Bearer ")) {
        return res.status(401).json({ massege: "Unauhorized" })
    }
    ///^מצאנו את ה header
    const token = authHedear.split(" ")[1]
    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        (err, decode) => {
            if (err)
                return res.status(401).json({ massege: "Forbidden" })
            req.user = decode
            next()
        }
    )
}
module.exports=verifyJWT