require('dotenv').config();
const express = require("express");
const cors = require("cors");
const app = express();
const path = require('path');
const fs = require('fs');
const PORT = process.env.PORT || 1800;
const conectDb = require("./config/conectDB");
const corsOptions = require("./config/corsOptions");
const fillProduct = require("./fillProducts");
conectDb();
fillProduct();
const userRoutes = require("./routes/userRoute");
const productRout = require("./routes/productRout");
const authRout = require("./routes/authRout");
const basketRout = require("./routes/basketRout");

app.use(express.json());

app.use(cors(corsOptions));
app.use(express.static("public"))
app.use('/api/users', userRoutes);
app.use('/api/products', productRout);
app.use('/api/basket', basketRout);
app.use('/api/auth', authRout);

app.use('/brandsPictur', express.static(path.join(__dirname, 'public', 'Brands')));

app.listen(PORT, () => console.log(`server running on ${PORT}`));