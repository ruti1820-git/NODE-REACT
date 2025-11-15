const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const User = require("../modules/UsersModule")

const register = async (req, res) => {
    console.log("Received registration data:", req.body);

    const { firstName, lastName, password, username, email, phoneNumber, address } = req.body
    if (!firstName || !password || !username || !email || !phoneNumber || !lastName || !address) {
        return res.status(400).json({ massage: "All field are required" })
    }

    const duplicateUser = await User.findOne({ username: username }).lean()
    if (duplicateUser) {
        return res.status(409).json({ message: "Duplicate user" })
    }
    const hashPassword = await bcrypt.hash(password, 10)
    const user = await User.create({ username, password: hashPassword, firstName, lastName, email, phoneNumber, address })
    if (!user) {
        return res.status(400).json({ massage: "All field are required" }).lean()

    }
    user.isActive = true
    res.send({ message: `User ${user.firstName} ${user.lastName} created` });
}

const login = async (req, res) => {
    const { username, password } = req.body
    if (!username || !password) {
        return res.status(400).json({ massage: "All field are required" })

    }
    const foundUser = await User.findOne({ username: username })
    if (!foundUser || !foundUser.isActive) {
        return res.status(401).json({ massage: "Unauthorized" })
    }
    const match = await bcrypt.compare(password, foundUser.password)
    if (!match) {
        return res.status(401).json({ massage: "is dosent match" })
    }
    //^פה זיהינו משתמש
    const userInfo = {
        _id: foundUser._id,
        name: foundUser.name,
        username: foundUser.username,
        roles: foundUser.roles,
        email: foundUser.email,
        firstName: foundUser.firstName,
        lastName: foundUser.lastName,
        password: foundUser.password,
        phoneNumber: foundUser.phoneNumber,
        address: foundUser.address
    }
    const accessToken = jwt.sign(userInfo, process.env.ACCESS_TOKEN_SECRET)

    res.json(accessToken)
}
module.exports = { login, register }