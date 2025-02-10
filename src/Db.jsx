import Decrease from "./assets/icons/Group 99.png";
import Increase from "./assets/icons/Group 101.png";
import Img1 from "./assets/Images/Character.png";
import Img2 from "./assets/Images/cuate.png";
import Img3 from "./assets/Images/amico.png";
import rev1 from './assets/Images/ireti.png'
import rev2 from './assets/Images/bayo.png'
import rev3 from './assets/Images/olagoke.png'


export const coinInfo = [
  {
    id: 1,
    pair: "BTC/NGN",
    price: "20,560,101.59",
    pnl: "-3.21%",
    img: Decrease,
  },
  {
    id: 2,
    pair: "USDT/NGN",
    price: 453.44,
    pnl: "+10.20%",
    img: Increase,
  },
  {
    id: 3,
    pair: "ETH/NGN",
    price: "818,490.32",
    pnl: "+253%",
    img: Increase,
  },
  {
    id: 4,
    pair: "LTC/NGN",
    price: "818,490.32",
    pnl: "81,002.32",
    img: Decrease,
  },
  {
    id: 5,
    pair: "XRP/NGN",
    price: 226.56,
    pnl: "-3.21%",
    img: Decrease,
  },
];

export const why = [
  {
    id: 1,
    image: Img1,
    title: "Easy Mode of Payment",
    desc: "People can now easily send and receive money from anywhere in the world to purchase goods and pay for services."
  },
  {
    id: 2,
    image: Img2,
    title: "Financial Freedom",
    desc: "Just like the internet no single entity controls the Crypto network which provides users transparency and privacy, which puts you in absolute control of your money."
  },
  {
    id: 3,
    image: Img3,
    title: "Investment",
    desc: "The constant demand as made Cryptocurrecies a Digital Gold used for alternative store of wealth on long term investments."
  }
];


export const review = [
    {
        id: 1,
        name: 'Ireti',
        location: 'Nigeria',
        review: 'Trading on TradExpress mobile & web platforms has been a smooth experience for me quite easy to navigate.',
        image: rev1
    },
    {
        id: 2,
        name: 'Bayo',
        location: 'USA',
        review: 'Trading on TradExpress mobile & web platforms has been a smooth experience for me quite easy to navigate.',
        image: rev2
    },
    {
        id: 3,
        name: 'Olagoke',
        location: 'Nigeria',
        review: 'Trading on TradExpress mobile & web platforms has been a smooth experience for me quite easy to navigate.',
        image: rev3
    }
]
  