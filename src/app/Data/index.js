import {
  GiBubblingBowl,
  GiRoastChicken,
  GiDrinkMe,
  GiFruitBowl,
  GiRiceCooker,
} from "react-icons/gi";
import { IoFishSharp, IoIceCreamSharp } from "react-icons/io5";
export const heroData = [
  {
    id: 1,
    name: "Ice cream",
    description: "Chocolate & Vanilla",
    price: "5.25",
    imageSrc: "Assets/i1.png",
  },
  {
    id: 2,
    name: "strawberry's",
    description: "Fresh Strawberry's",
    price: "10.25",
    imageSrc: "Assets/f1.png",
  },
  {
    id: 3,
    name: "Chicken Kebab",
    description: "Mixed Kebab Plate",
    price: "8.25",
    imageSrc: "Assets/c3.png",
  },
  {
    id: 4,
    name: "Fish Kebab",
    description: "Mixed Fish kebab",
    price: "5.25",
    imageSrc: "Assets/fi1.png",
  },
];
export const categories = [
  {
    id: 1,
    name: "Chicken",
    urlParamName: "chicken",
    icon: <GiRoastChicken />,
  },
  {
    id: 2,
    name: "Curry",
    urlParamName: "curry",
    icon: <GiBubblingBowl />,
  },
  {
    id: 3,
    name: "Rice",
    urlParamName: "rice",
    icon: <GiRiceCooker />,
  },
  {
    id: 4,
    name: "Fish",
    urlParamName: "fish",
    icon: <IoFishSharp />,
  },
  {
    id: 5,
    name: "Fruits",
    urlParamName: "fruits",
    icon: <GiFruitBowl />,
  },
  {
    id: 6,
    name: "Icecreams",
    urlParamName: "icecreams",
    icon: <IoIceCreamSharp />,
  },

  {
    id: 7,
    name: "Soft Drinks",
    urlParamName: "drinks",
    icon: <GiDrinkMe />,
  },
];
