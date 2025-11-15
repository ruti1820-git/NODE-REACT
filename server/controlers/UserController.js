const User = require("../modules/UsersModule")

const getAllUsers = async (req, res) => {
    const users = await User.find()
    res.json(users)
}
const getAllUserById = async (req, res) => {
    const { id } = req.params
    if (!id) {
        return res.status(404).json({ message: 'User not found' });
    }
    const userById = await User.findById(id)
    res.json(userById)
}
const addUser = async (req, res) => {
    const { username, firstName, lastName, address, phoneNumber, email, password } = req.body
    if (!username || !email) {
        return res.status(400).json({ message: 'Username and email are required.' });
    }
    const addUsers = await User.create({ username, firstName, lastName, address, phoneNumber, email, password });
    await addUsers.save()
    res.send("add successfuly")
}
const deleteById = async (req, res) => {
    const { id } = req.params
    if (!id) {
        return res.status(400).json({ message: 'נדרש מזהה משתמש (ID) למחיקה.' });
    }
    const UserId = User.findById({ _id: id })
    const users = await User.deleteOne(UserId)
    if (!users) {
        return res.status(200).json(users)
    }

    res.send("delete succssess")
}

module.exports = { getAllUsers, getAllUserById, addUser, deleteById }