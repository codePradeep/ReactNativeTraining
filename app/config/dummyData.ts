import { icon, } from "./";


const categories = [
    {
        id: 1,
        name: "Fast Food",
        icon: icon.burger
    },
    {
        id: 2,
        name: "Fruit Item",
        icon: icon.cherry
    },
    {
        id: 3,
        name: "Rice Item",
        icon: icon.rice
    }
]

const menu= [
    {
    id: 1,
    name: "Hamburger",
    description: "Chicken patty hamburger",   
    price: 15.99,
    calories: 78,
    isFavourite: true,
    image: require("../assets/dummyData/hamburger.png"),
    categories: 1,
    distance:4,
    rating:1, 
    time: "30 Mins",



},
 {
    id: 2,
    name: "Hot Tacos",
    description: "Mexican tortilla & tacos",
    price: 10.99,
    calories: 78,
    isFavourite: false,
    image: require("../assets/dummyData/hot_tacos.png"),
    categories: 1,
    distance:8,
    rating:2, 
    time: "10 Mins",

},

{
    id: 3,
    name: "Veg Biryani",
    description: "Indian Vegetable Biryani",
  
    price: 10.99,
    calories: 78,
    isFavourite: true,
    image: require("../assets/dummyData/veg_biryani.png"),
    categories:3,
    distance:12,
    rating:3, 
    time: "30 Mins",

},
{
    id: 4,
    name: "Wrap Sandwich",
    description: "Grilled vegetables sandwich",
    price: 10.99,
    calories: 78,
    isFavourite: true,
    image: require("../assets/dummyData/wrap_sandwich.png"),
    categories: 1,
    distance:14,
    rating:3, 
    time: "20 Mins",

},
{
    id: 5,
    name: "Fruit mix Sandwich",
    description: " vegetables sandwich",
    price: 10.99,
    calories: 78,
    isFavourite: true,
    image: require("../assets/dummyData/wrap_sandwich.png"),
    categories:2,
    distance:3,
    rating:3, 
    time: "10 Mins",
},
{
    id: 6,
    name: "Fruit Sandwich",
    description: "vegetables sandwich",
    price: 10.99,
    calories: 78,
    isFavourite: true,
    image: require("../assets/dummyData/wrap_sandwich.png"),
    categories:2,
    distance:4,
    rating:4, 
    time: "30 Mins",
},
{
    id: 7,
    name: "Sandwich",
    description: "Grilled vegetables sandwich",
    price: 10.99,
    calories: 78,
    isFavourite: true,
    image: require("../assets/dummyData/wrap_sandwich.png"),
    categories:2,
    distance:5,
    rating:4, 
    time: "30 Mins",
}
]

const Cartmenu= [
    {
    id: 1,
    name: "Hamburger",
    description: "Chicken patty hamburger",   
    price: 15.99,
    image: require("../assets/dummyData/hamburger.png"),
    categories: 1


},
 {
    id: 2,
    name: "Hot Tacos",
    description: "Mexican tortilla & tacos",
    price: 10.99,
    image: require("../assets/dummyData/hot_tacos.png"),
    

},

{
    id: 3,
    name: "Veg Biryani",
    description: "Indian Vegetable Biryani",
    price: 10.99,
    image: require("../assets/dummyData/veg_biryani.png"),

},
]



export {
    categories,
    menu,
    Cartmenu
}