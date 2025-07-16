import basket_icon from "./basket_icon.png";
import basket_icon2 from "./basket_icon2.png";
import basket_icon3 from "./basket_icon3.png";
import logo from "./logo.png";
import logo2 from "./logo2.png";
import food1 from "./food_1.jpg";
import food2 from "./food_2.jpg";
import food3 from "./food_3.jpg";
import food4 from "./food_4.jpg";
import food5 from "./food_5.jpg";
import food6 from "./food_6.jpg";
import food7 from "./food_7.jpg";
import food8 from "./food_8.jpg";
import snack from "./snack.png";
import brosted from "./brosted.png";
import shawrma from "./shawrma.png";
import about from "./about.jpg";
import gallery1 from "./gallery1.jpg";
import gallery2 from "./gallery2.jpg";
import gallery3 from "./gallery3.jpg";
import gallery4 from "./gallery4.jpg";
import gallery5 from "./gallery5.jpg";
import gallery6 from "./gallery6.jpg";

export const Assets = {
  logo,
  logo2,
  basket_icon,
  basket_icon2,
  basket_icon3,
  snack,
  brosted,
  shawrma,
  about,
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
};

export const categories = [
  { name: "شاورما", icon: shawrma },
  { name: "بروستد", icon: brosted },
  { name: "سناك", icon: snack },
];

export const products = [
  {
    id: 1,
    name: "أورجينال لحم",
    price: 24,
    image: food1,
    category: "shawarma",
    description: "لحم متبّل مع صوص طرطور وخبز عربي.",
  },
  {
    id: 2,
    name: "أورجينال دجاج",
    price: 21,
    image: food2,
    category: "shawarma",
    description: "دجاج متبّل مع صوص ثوم وخبز عربي.",
  },
  {
    id: 3,
    name: "مشروح لحم",
    price: 24,
    image: food3,
    category: "sandwich",
    description: "لحم مشوي مع خضار وصوص خاص.",
  },
  {
    id: 4,
    name: "مشروح دجاج",
    price: 21,
    image: food4,
    category: "sandwich",
    description: "دجاج مشوي مع خضار وصوص خاص.",
  },
  {
    id: 5,
    name: "بيكاسو لحم",
    price: 28,
    image: food5,
    category: "broasted",
    description: "قطع لحم بروستد مقرمشة مع بطاطا.",
  },
  {
    id: 6,
    name: "بيكاسو دجاج",
    price: 23,
    image: food6,
    category: "broasted",
    description: "قطع دجاج بروستد مقرمشة مع بطاطا.",
  },
];

export const mwnu_categories = [
  { id: "all", title: "جميع الأصناف" },
  { id: "shawarma", title: "الشاورما" },
  { id: "broasted", title: "البروستد" },
  { id: "sandwich", title: "السندويش" },
];

export const menu_items = [
  {
    id: 1,
    name: "أورجينال لحم",
    price: 24,
    image: food1,
    category: "shawarma",
    description: "لحم متبّل مع صوص طرطور وخبز عربي.",
  },
  {
    id: 2,
    name: "أورجينال دجاج",
    price: 21,
    image: food2,
    category: "shawarma",
    description: "دجاج متبّل مع صوص ثوم وخبز عربي.",
  },
  {
    id: 3,
    name: "مشروح لحم",
    price: 24,
    image: food3,
    category: "sandwich",
    description: "لحم مشوي مع خضار وصوص خاص.",
  },
  {
    id: 4,
    name: "مشروح دجاج",
    price: 21,
    image: food4,
    category: "sandwich",
    description: "دجاج مشوي مع خضار وصوص خاص.",
  },
  {
    id: 5,
    name: "بيكاسو لحم",
    price: 28,
    image: food5,
    category: "broasted",
    description: "قطع لحم بروستد مقرمشة مع بطاطا.",
  },
  {
    id: 6,
    name: "بيكاسو دجاج",
    price: 23,
    image: food6,
    category: "broasted",
    description: "قطع دجاج بروستد مقرمشة مع بطاطا.",
  },
  {
    id: 7,
    name: "مكسيكان لحم",
    price: 23,
    image: food7,
    category: "sandwich",
    description: "سندويش لحم بطابع مكسيكي حار.",
  },
  {
    id: 8,
    name: "مكسيكان دجاج",
    price: 20,
    image: food8,
    category: "sandwich",
    description: "سندويش دجاج بطابع مكسيكي حار.",
  },
  {
    id: 9,
    name: "شاورما عربي لحم",
    price: 30,
    image: food2,
    category: "shawarma",
    description: "لحم شاورما مع خبز عربي وثوم.",
  },
  {
    id: 10,
    name: "شاورما عربي دجاج",
    price: 27,
    image: food4,
    category: "shawarma",
    description: "دجاج شاورما مع خبز عربي وطرطور.",
  },
  {
    id: 11,
    name: "وجبة بروستد عادي",
    price: 28,
    image: food1,
    category: "broasted",
    description: "4 قطع دجاج مقرمش مع بطاطا وخبز.",
  },
  {
    id: 12,
    name: "فاهيتا دجاج",
    price: 25,
    image: food7,
    category: "sandwich",
    description: "قطع دجاج مشوحة مع فليفلة وبصل.",
  },
  {
    id: 13,
    name: "سندويش هوت دوغ",
    price: 20,
    image: food8,
    category: "sandwich",
    description: "نقانق ساخنة بخبز طري وصوصات.",
  },
  {
    id: 14,
    name: "بيتزا شاورما",
    price: 34,
    image: food5,
    category: "shawarma",
    description: "بيتزا بصلصة شاورما واختيار لحم أو دجاج.",
  },
];
