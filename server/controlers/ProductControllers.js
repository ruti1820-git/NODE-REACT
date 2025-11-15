const Products = require("../modules/ProductsModule")

const getAllProducts = async (req, res) => {
    const products = await Products.find()
    res.json(products)
}

const getProductById = async (req, res) => {
    const { id } = req.params
    const productId = await Products.findById({ _id: id, user: req.user._id }).lean()
    if(!productId)
        res.status(400).json('מוצר לא נמצא')
    res.json(productId)
}

const addProduct = async (req, res) => {
    const { name, price, description, category,imageUrl } = req.body
    if (!name || !price) {
        console.log(400);
        return res.status(400).json({ message: 'name and price are required.' });
    }
    const addP = await Products.create({ name, price, description, category,imageUrl })
    res.json(addP)

}

const deleteProduct = async (req, res) => {
    console.log("deleteProduct");
    const { id } = req.params;
    console.log("id",id);
        const deleteP = await Products.findById(id);

        if (!deleteP) {
            return res.status(404).json({ message: "מוצר לא נמצא" });
        }

        const Dproduct = await deleteP.deleteOne();
        
        res.status(200).json(Dproduct);

     
};

const updateProduct = async (req, res) => {
    
        const { id } = req.params;
        const { name, price, description, category, imageUrl } = req.body;
        console.log(name, price, description, category, imageUrl);
        if (!name || !price || !description || !category || !imageUrl) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        const upProduct = await Products.findById(id);
        if (!upProduct) {
            return res.status(404).json({ message: "Product not found" });
        }
        if (name) upProduct.name = name;
        if (price) upProduct.price = price;
        if (description) upProduct.description = description;
        if (category) upProduct.category = category;
        if (imageUrl) upProduct.imageUrl = imageUrl;

        const savedProduct = await upProduct.save();

        return res.status(200).json(savedProduct);
   
};


const getProductByCategory = async (req, res) => {
    const { category } = req.params
    const productCategory = Products.filter((e) => {
        return (e.category == category)

    })
}

module.exports = { getAllProducts, getProductById, addProduct, deleteProduct, updateProduct, getProductByCategory }