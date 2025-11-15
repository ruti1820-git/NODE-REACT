const jwt = require("jsonwebtoken")
const verifyJWT = (req, res, next) => {
    console.log("hhh");
    const authHedear = req.headers.Authorization || req.headers.authorization
    console.log(authHedear);
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
            if(decode.roles!="Admin")
                return res.status(401).json({ massege: "you dont admin" })
            req.user = decode
            next()
        }
    )


}
module.exports=verifyJWT