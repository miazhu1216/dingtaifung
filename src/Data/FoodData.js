export function formatPrice(price) {
  return price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });
}

export const foodItems = [
  {
    img: "/img/ribs.jpeg",
    name: "Sweet & Sour Pork Baby Back Ribs",
    section: "Appetizers",
    price: 9.25
  },
  {
    img: "/img/salad.jpeg",
    name: "Cucumber Salad",
    section: "Appetizers",
    price: 6.75
  },
  {
    img: "/img/chop.jpeg",
    name: "Fried Pork Chop",
    section: "Appetizers",
    price: 7.25
  },
  {
    name: "Crab & Kurobuta Pork Xiao Long Bao",
    img: "/img/bao1.jpeg",
    section: "Xiao Long Bao",
    price: 16.75
  },
  {
    name: "Kurobuta Pork Xiao Long Bao",
    img: "/img/bao2.jpeg",
    section: "Xiao Long Bao",
    price: 14.00
  },
  {
    name: "Truffle & Kurobuta Pork Xiao Long Bao",
    img: "/img/bao3.jpeg",
    section: "Xiao Long Bao",
    price: 30.25
  },
  {
    img: "/img/soup1.jpeg",
    name: "Braised Beef Soup",
    section: "Soups and Noodle Soups",
    price: 11.00
  },
  {
    img: "/img/soup2.jpeg",
    name: "Braised Beef Noodle Soup",
    section: "Soups and Noodle Soups",
    price: 13.75
  },
  {
    img: "/img/soup3.jpeg",
    name: "Jidori Chicken Wonton Soup",
    section: "Soups and Noodle Soups",
    price: 12.00
  },
  {
    img: "/img/soup4.jpeg",
    name: "Shrimp Noodle Soup",
    section: "Soups and Noodle Soups",
    price: 13.00
  },
  {
    img: "/img/bun.jpeg",
    name: "Red Bean Bun (2 each)",
    section: "Desserts",
    price: 6.50
  },
  
  {
    img: "/img/bean.jpeg",
    name: "Sautéed String Beans with Garlic",
    section: "Greens",
    price: 12.50
  },
  {
    img: "/img/choy.jpeg",
    name: "Sautéed Bok Choy",
    section: "Greens",
    price: 11.50
  },

  {
    img: "/img/broccoli.jpeg",
    name: "Sautéed Broccoli with Garlic",
    section: "Greens",
    price: 11.50
  },
];

export const foods = foodItems.reduce((res, food) => {
  if (!res[food.section]) {
    res[food.section] = [];
  }
  res[food.section].push(food);
  return res;
}, {});

//  © created by react.school
