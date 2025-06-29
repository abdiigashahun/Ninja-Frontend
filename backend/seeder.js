// const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// const Product = require("./models/Product");
// const User = require("./models/User");
// const Cart = require("./models/Cart");
// const products = require("./data/products");

// dotenv.config();


// mongoose.connect(process.env.MONGO_URI);




// const seedData = async () => {
//     try {
      
//         await Product.deleteMany();
//         await User.deleteMany();
//         await Cart.deleteMany();

       
//         const createdUser = await User.create({
//             name: "Admin User",
//             email: "admin@example.com",
//             password: "123456",
//             role: "admin",
//         });
     
//         const userID = createdUser._id;

//         const sampleProducts = products.map((product) => {
//             return { ...product, user: userID}
//         });
        
//         await Product.insertMany(sampleProducts);

//         console.log("Product Data seeded successfully");
//         process.exit();

//     } catch (error) {
//         console.error("Error seeding the data:" ,error);
//         process.exit(1);
//     }
// };
// seedData();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./models/Product");
const User = require("./models/User");
const Cart = require("./models/Cart");
const products = require("./data/products");

dotenv.config();

const seedData = async () => {
  try {
   await mongoose.connect(process.env.MONGO_URI);


    await Product.deleteMany();
    await User.deleteMany();
    await Cart.deleteMany();

    const createdUser = await User.create({
      name: "Admin User",
      email: "admin@example.com",
      password: "123456",
      role: "admin",
    });

    const sampleProducts = products.map((product) => ({
      ...product,
      user: createdUser._id,
    }));

    await Product.insertMany(sampleProducts);
    console.log("✅ Seeding complete");
    process.exit();
  } catch (error) {
    console.error("❌ Seeding error:", error);
    process.exit(1);
  }
};

seedData(); // ✅ call the function
