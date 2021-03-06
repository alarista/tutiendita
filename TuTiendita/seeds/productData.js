const {Product} = require ('../models');

const productData = [
    {
        product_name: 'Chobani Greek Yogurt Variety Pack, 5.3 oz' ,
        price: 1.49,
        stock: 14,
        category: 'Dairy',
        filename: 'Chobani.jpg',
        storeOwner_id: 1,
    },
    {
        product_name: 'Yoplait Original Low Fat Yogurt' ,
        price: 1.99,
        stock: 6,
        category: 'Dairy',
        filename: 'Yoplait.jpg',
        storeOwner_id: 1,
    },
    {
        product_name: 'Kerrygold Pure Irish Butter, Unsalted, 8 oz' ,
        price: 4.99,
        stock: 12,
        category: 'Dairy',
        filename: 'Kerrygold.jpg',
        storeOwner_id: 1,
    },
    {
        product_name: 'Grand European Havarti Cheese, 30 Slices, 1.5 lbs' ,
        price: 7.99,
        stock: 3,
        category: 'Dairy',
        filename: 'GrandEuropean.JPG',
        storeOwner_id: 1,
    },
    {
        product_name: 'Pure Vanilla Extract, 16 fl oz',
        price: 29.99,
        stock: 5,
        category: 'Pantry',
        filename: 'pureVanilla.JPG',
        storeOwner_id: 1,
    },
    {
        product_name: 'Namaste Foods Gluten Free Pizza Crust Mix 16 oz' ,
        price: 5.99,
        stock: 2,
        category: 'Pantry',
        filename: 'NamastePizza.jpg',
        storeOwner_id: 1,
    },
    {
        product_name: 'Namaste Gluten Free Waffle & Pancake Mix 21 oz.' ,
        price: 3.99,
        stock: 25,
        category: 'Pantry',
        filename: 'NamasteMix.jpg',
        storeOwner_id: 1,
    },
    {
        product_name: 'Fresh Strawberries, 1 lb' ,
        price: 3.99,
        stock: 32,
        category: 'Fruits and Vegetables',
        filename: 'Strawberries.jpeg',
        storeOwner_id: 1,
    },
    {
        product_name: 'Clementines, 3lb bag' ,
        price: 2.49,
        stock: 26,
        category: 'Fruits and Vegetables',
        filename: 'Clementines.jpeg',
        storeOwner_id: 1,
    },
    {
        product_name: 'Fresh Blueberries, 24 Oz' ,
        price: 4.49,
        stock: 5,
        category: 'Fruits and Vegetables',
        filename: 'Blueberries.jpeg',
        storeOwner_id: 1,
    },
    {
        product_name: 'Fresh Red Cherries, 2 lb Bag' ,
        price: 3.49,
        stock: 7,
        category: 'Fruits and Vegetables',
        filename: 'RedCherries.jpeg',
        storeOwner_id: 1,
    },
    {
        product_name: 'NESCAFE CAFE DE OLLA Cinnamon Instant Coffee Beverage 6.7 oz. Jar' ,
        price: 5.84,
        stock: 30,
        category: 'Veberages',
        filename: 'Nescafe.jpg',
        storeOwner_id: 1,
    },
    {
        product_name: 'Monster Green Energy, 16oz' ,
        price: 2.30,
        stock: 8,
        category: 'Veberages',
        filename: 'Monster.jpg',
        storeOwner_id: 1,
    },
    {
        product_name: 'POWERADE Power Water, Berry Cherry, Zero Sugar Zero Calorie, 16.9 fl oz' ,
        price: 0.60,
        stock: 23,
        category: 'Veberages',
        filename: 'Powerade.jpg',
        storeOwner_id: 1,
    },
    {
        product_name: 'Pure Protein Shake, Vanilla Milkshake, 30g Protein, 11 Oz' ,
        price: 1.25,
        stock: 10,
        category: 'Veberages',
        filename: 'PureProtein.jpeg',
        storeOwner_id: 1,
    },
    {
        product_name: 'Sara Lee Artesano Original Flavor Bakery Bread, No Artificial Colors or Flavors, 1 Pound 4 Ounce Loaf' ,
        price: 10.99,
        stock: 4,
        category: 'Bread',
        filename: 'SaraLee.jpeg',
        storeOwner_id: 1,
    },
    {
        product_name: 'Katz Gluten Free Chocolate Chip Muffin Snacks Gluten Free (1 Pack of 4 Muffin Snack Cakes, 6 Ounce)' ,
        price: 1.99,
        stock: 12,
        category: 'Bread',
        filename: 'Katz.jpg',
        storeOwner_id: 1,
    },
    {
        product_name: 'Mrs. Freshleys?? Deluxe Oreo?? Mini Brownies 18 ct Box' ,
        price: 11.46 ,
        stock: 5,
        category: 'Bread',
        filename: 'MrsFreshleys.jpeg',
        storeOwner_id: 1,
    },
    {
        product_name: 'Oroweat Whole Grains Oatnut Bread, Baked with Simple Ingredients & Oats, Sunflower Seeds & Hazelnuts, 24 oz' ,
        price: 16.99,
        stock: 3,
        category: 'Bread',
        filename: 'Oroweat.jpeg',
        storeOwner_id: 1,
    },
    {
        product_name: 'Oscar Mayer Deli Fresh Cracked Black Pepper Turkey Breast Sliced Deli Lunch Meat Family Size, 16 oz. Tray' ,
        price: 4.38,
        stock: 23,
        category: 'Delicatessen',
        filename: 'OscarMayer.jpeg',
        storeOwner_id: 1,
    },
    {
        product_name: 'Hillshire Farm?? Ultra Thin Sliced Deli Lunch Meat, Honey Ham, 16 oz' ,
        price: 5.48,
        stock: 12,
        category: 'Delicatessen',
        filename: 'Hillshire.JPG',
        storeOwner_id: 1,
    },
    {
        product_name: 'Gallo Salame?? Deli Thin Sliced Italian Dry Salami Lunch Meat, 7 oz' ,
        price: 4.27,
        stock: 7,
        category: 'Delicatessen',
        filename: 'GalloSalame.JPG',
        storeOwner_id: 1,
    },
    {
        product_name: 'Bar S 97% Fat-Free Deli Style Honey Ham, 16 Oz.' ,
        price: 3.26,
        stock: 2,
        category: 'Delicatessen',
        filename: 'BarS.jpeg',
        storeOwner_id: 1,
    },
    {
        product_name: 'M&Ms Full Size Chocolate Candy' ,
        price: 1.29,
        stock: 30,
        category: 'Snacks and Candy',
        filename: 'mandms.jpg',
        storeOwner_id: 1,
    },
    {
        product_name: 'Nerds Gummy Clusters Candy' ,
        price: 0.34,
        stock: 30,
        category: 'Snacks and Candy',
        filename: 'nerds.jpg',
        storeOwner_id: 1,
    },
    {
        product_name: 'SKITTLES Sour Candy Grab N Go Bag, 7.2 ounce' ,
        price: 2.18,
        stock: 23,
        category: 'Snacks and Candy',
        filename: 'Skittles.jpg',
        storeOwner_id: 1,
    },
]

// {
//     product_name: '' ,
//     price: ,
//     stock: ,
//     filename: 'place holder',
//     storeOwner_id: ,
//     category_id: ,
// },

const seedProduct = () => Product.bulkCreate(productData);

module.exports = seedProduct;