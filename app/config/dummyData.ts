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
    image: require("../assets/dummyData/hamburger.png")
},
 {
    id: 2,
    name: "Hot Tacos",
    description: "Mexican tortilla & tacos",
    
    price: 10.99,
    calories: 78,
    isFavourite: false,
    image: require("../assets/dummyData/hot_tacos.png")
},

{
    id: 3,
    name: "Veg Biryani",
    description: "Indian Vegetable Biryani",
  
    price: 10.99,
    calories: 78,
    isFavourite: true,
    image: require("../assets/dummyData/veg_biryani.png")
},
{
    id: 4,
    name: "Wrap Sandwich",
    description: "Grilled vegetables sandwich",
   
    price: 10.99,
    calories: 78,
    isFavourite: true,
    image: require("../assets/dummyData/wrap_sandwich.png")
}
]



export {
    categories,
    menu,
}