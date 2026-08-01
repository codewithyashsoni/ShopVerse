import wirelessHeadphones from "../assets/products/wireless-headphones.jpg";
import bluetoothSpeaker from "../assets/products/bluetooth-speaker.jpg";
import smartWatch from "../assets/products/smart-watch.jpg";
import gamingMouse from "../assets/products/gaming-mouse.jpg";
import mensTshirt from "../assets/products/mens-tshirt.jpg";
import denimJacket from "../assets/products/denim-jacket.jpg";
import runningShoes from "../assets/products/running-shoes.jpg";
import leatherWallet from "../assets/products/leather-wallet.jpg";
import tableLamp from "../assets/products/table-lamp.jpg";
import wallClock from "../assets/products/wall-clock.jpg";
import coffeeMugSet from "../assets/products/coffee-mug-set.jpg";
import plantPot from "../assets/products/plant-pot.jpg";
import yogaMat from "../assets/products/yoga-mat.jpg";
import cricketBat from "../assets/products/cricket-bat.jpg";
import football from "../assets/products/football.jpg";
import gymWaterBottle from "../assets/products/gym-water-bottle.jpg";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 2499,
    image: wirelessHeadphones,
    description:
      "Experience immersive sound with these wireless headphones featuring deep bass, crystal-clear audio, and up to 30 hours of battery life.",
    stock: 18,
    rating: 4.6,
  },
  {
    id: 2,
    name: "Bluetooth Speaker",
    category: "Electronics",
    price: 1799,
    image: bluetoothSpeaker,
    description:
      "Portable Bluetooth speaker with rich stereo sound, waterproof design, and up to 12 hours of uninterrupted playback.",
    stock: 10,
    rating: 4.4,
  },
  {
    id: 3,
    name: "Smart Watch",
    category: "Electronics",
    price: 3999,
    image: smartWatch,
    description:
      "Stay connected with fitness tracking, heart-rate monitoring, sleep analysis, and smart notifications.",
    stock: 0,
    rating: 4.7,
  },
  {
    id: 4,
    name: "Gaming Mouse",
    category: "Electronics",
    price: 1299,
    image: gamingMouse,
    description:
      "Ergonomic gaming mouse with adjustable DPI, RGB lighting, and programmable buttons for precision gaming.",
    stock: 20,
    rating: 4.5,
  },
  {
    id: 5,
    name: "Men's Casual T-Shirt",
    category: "Fashion",
    price: 799,
    image: mensTshirt,
    description:
      "Premium cotton t-shirt offering superior comfort, breathability, and a perfect fit for everyday wear.",
    stock: 25,
    rating: 4.2,
  },
  {
    id: 6,
    name: "Denim Jacket",
    category: "Fashion",
    price: 2299,
    image: denimJacket,
    description:
      "Classic denim jacket with durable stitching and a timeless design that pairs well with any outfit.",
    stock: 8,
    rating: 4.8,
  },
  {
    id: 7,
    name: "Running Shoes",
    category: "Fashion",
    price: 3499,
    image: runningShoes,
    description:
      "Lightweight running shoes featuring cushioned soles, breathable mesh, and excellent grip for daily workouts.",
    stock: 15,
    rating: 4.6,
  },
  {
    id: 8,
    name: "Leather Wallet",
    category: "Fashion",
    price: 999,
    image: leatherWallet,
    description:
      "Slim genuine leather wallet with multiple card slots and a sleek, premium finish.",
    stock: 0,
    rating: 4.3,
  },
  {
    id: 9,
    name: "Table Lamp",
    category: "Home",
    price: 1199,
    image: tableLamp,
    description:
      "Modern LED table lamp with adjustable brightness, perfect for reading, studying, or working.",
    stock: 12,
    rating: 4.4,
  },
  {
    id: 10,
    name: "Wooden Wall Clock",
    category: "Home",
    price: 1599,
    image: wallClock,
    description:
      "Elegant wooden wall clock featuring a silent movement mechanism and minimalist design.",
    stock: 6,
    rating: 4.5,
  },
  {
    id: 11,
    name: "Coffee Mug Set",
    category: "Home",
    price: 699,
    image: coffeeMugSet,
    description:
      "Set of premium ceramic coffee mugs designed for everyday use and perfect for serving hot beverages.",
    stock: 30,
    rating: 4.1,
  },
  {
    id: 12,
    name: "Plant Pot",
    category: "Home",
    price: 899,
    image: plantPot,
    description:
      "Decorative indoor plant pot crafted from durable ceramic, adding elegance to your home décor.",
    stock: 14,
    rating: 4.4,
  },
  {
    id: 13,
    name: "Yoga Mat",
    category: "Sports",
    price: 999,
    image: yogaMat,
    description:
      "Non-slip yoga mat with extra cushioning for enhanced comfort during yoga, stretching, and workouts.",
    stock: 18,
    rating: 4.6,
  },
  {
    id: 14,
    name: "Cricket Bat",
    category: "Sports",
    price: 2799,
    image: cricketBat,
    description:
      "Premium English willow cricket bat designed for powerful strokes and exceptional balance.",
    stock: 9,
    rating: 4.7,
  },
  {
    id: 15,
    name: "Football",
    category: "Sports",
    price: 1299,
    image: football,
    description:
      "Durable football with superior grip and long-lasting performance for practice and matches.",
    stock: 16,
    rating: 4.5,
  },
  {
    id: 16,
    name: "Gym Water Bottle",
    category: "Sports",
    price: 499,
    image: gymWaterBottle,
    description:
      "Leak-proof BPA-free water bottle with a stylish design to keep you hydrated throughout your workout.",
    stock: 0,
    rating: 4.2,
  },
];

export default products