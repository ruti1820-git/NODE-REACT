const Basket = require("../modules/BasketModule")

const getAllBasket = async (req, res) => {
    const basket = await Basket.find().populate('nameUser').populate('ProuductId')
    res.json(basket)
}

const addBasket = async (req, res) => {
    console.log("aaaaaaaaaaaaaaaa");
    const nameUser = req.user._id
    const { Qentity, ProuductId } = req.body
    console.log(Qentity, ProuductId, nameUser);

    if (!nameUser || !ProuductId) {
        return res.status(400).json({ message: 'ProuductId and nameUser are required.' });
    }
    const ProductB = await Basket.findOne({ nameUser, ProuductId })
    console.log("ProductB", ProductB);
    let addb = null

    if (!ProductB) {
        addb = await Basket.create({ Qentity, ProuductId, nameUser })

        if (!addb)
            return res.status(404).json({ message: "error" });
    }
    else {

        ProductB.Qentity = ProductB.Qentity + Qentity
        if (ProductB.Qentity == 0) {
            const DProductB = await ProductB.deleteOne();
            res.status(200).json(DProductB);
        }
        await ProductB.save()
    }
    res.json(addb)
}
const deleteBasket = async (req, res) => {
    const { id } = req.params
    const deleteB = await Basket.findById(id);
    if (!deleteB) {
        return res.status(404).json({ message: "מוצר לא נמצא" });
    }

    const Dbasket = await deleteB.deleteOne();
    res.status(200).json(Dbasket);


};
module.exports = { getAllBasket, addBasket, deleteBasket }