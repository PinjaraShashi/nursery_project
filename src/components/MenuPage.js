import React from 'react';
import PlantCard from './PlantCard';

// import Container from "@mui/material/Container";
// import Typography from "@mui/material/Typography";
// import Link from "@mui/material/Link";
// import Grid from "@mui/material/Grid";
// import { Box } from "@mui/material";
// import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";



const plantData = [
  {
    id: 1,
    name: 'Pink Rose',
    price: 86,
    imageUrl: 'https://nurserylive.com/cdn/shop/products/nurserylive-g-plants-rose-dark-pink-plant-in-grower-round-black-pot-922015_600x600.jpg'
  },
  {
    id: 2,
    name: 'SunFlower',
    price: 98,
    imageUrl: 'https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_960,f_auto/DCTM_Penguin_UK_DK_AL458052_zs2mia.jpg'
  },
  {
    id: 3,
    name: 'MariGold',
    price: 145,
    imageUrl: 'https://nurserylive.com/cdn/shop/products/nurserylive-g-african-marigold-orange-plant-153227.jpg?v=1679749014.jpg'
  },
  {
    id: 4,
    name: 'SnakePlant',
    price: 165,
    imageUrl: 'https://greenkin.in/cdn/shop/files/snake-plant-laurentii-xlarge-growpot-greenkin.jpg?v=1686951517&width=1445.jpg'
  },
  {
    id: 5,
    name: 'Mango',
    price: 148,
    imageUrl: 'https://2.wlimg.com/product_images/bc-full/2020/6/3741992/mango-plant-1591501954-5467976.jpg'
  },
  {
    id: 6,
    name: 'Litchi',
    price: 135,
    imageUrl: 'https://images.jdmagicbox.com/quickquotes/images_main/green-city-nursery-litchi-plant-2220966596-466p8cr1.jpg'
  },
  {
    id: 7,
    name: 'Custrard Aplle',
    price: 198,
    imageUrl: 'https://m.media-amazon.com/images/I/510Bx35ZQHL._AC_UF1000,1000_QL80_.jpg'
  },
  {
    id: 8,
    name: 'Rubber Plant',
    price: 280,
    imageUrl: 'https://nurserylive.com/cdn/shop/products/nurserylive-rubber-tree-rubber-plant-ficus-elastica-small-plant-819163_600x600.jpg?v=1685457726.jpg'
  },
  {
    id: 9,
    name: 'Aglaomena ',
    price: 80,
    imageUrl: 'https://nurserylive.com/cdn/shop/products/nurserylive-plants-aglaonema-lady-valentine-aglaonema-anyamanee-pink-plant_600x600.jpg?v=1634212444.jpg'
  },
  {
    id: 10,
    name: 'Ficus',
    price: 89,
    imageUrl: 'https://nurserylive.com/cdn/shop/products/nurserylive-plants-ficus-microcarpa-bonsai-plant-16968856731788_305x305.jpg?v=1634219517.jpg'
  },
  {
    id: 11,
    name: 'MoneyPlant',
    price: 120,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYwixiTLNYZkYAwW__hiW1r22F7tiR1Y92Iw&usqp=CAU.jpg'
  },
  {
    id: 12,
    name: 'Banyan',
    price: 157,
    imageUrl: 'https://nurserylive.com/cdn/shop/products/nurserylive-banyan-tree-plant_305x305.jpg?v=1634214221.jpg'
  },
  {
    id: 13,
    name: 'Blue Berry',
    price: 180,
    imageUrl: 'https://nurserylive.com/cdn/shop/products/nurserylive-blueberry-plant_600x600.jpg?v=1634214706.jpg '
  },
  {
    id: 14,
    name: 'Coconut',
    price: 398,
    imageUrl: 'https://nurserylive.com/cdn/shop/products/nurserylive-plants-tree-of-kerala-coconut-plant-16969400025228_600x600.jpg?v=1634230818.jpg'
  },
  {
    id: 15,
    name: 'Amla',
    price: 108,
    imageUrl: 'https://nurserylive.com/cdn/shop/products/nurserylive-seeds-phyllanthus-emblica-amla-0-5-kg-seeds-16969191686284_600x600.jpg?v=1634225975.jpg'
  },
  {
    id: 16,
    name: 'RedSandle',
    price: 398,
    imageUrl: 'https://nurserylive.com/cdn/shop/products/nurserylive-seeds-sandal-wood-red-chandan-red-0-5-kg-seeds-16969293627532_600x600.jpg?v=1634227968.jpg'
  },
  {
    id: 17,
    name: 'Joshmin',
    price: 98,
    imageUrl: 'https://nurserylive.com/cdn/shop/products/nurserylive-g-juhi-jasminum-auriculatum-plant_600x600.jpg?v=1634222681.jpg'
  },
  {
    id: 18,
    name: 'Lily',
    price: 98,
    imageUrl: 'https://nurserylive.com/cdn/shop/products/nurserylive-g-hymenocallis-caribaea-spider-lilly-plant_600x600.jpg?v=1634222120.jpg'
  },
  {
    id: 19,
    name: 'Lotus',
    price: 158,
    imageUrl: 'https://nurserylive.com/cdn/shop/products/nurserylive-seeds-nelumbo-nucifera-lotus-mix-colors-0-5-kg-seeds-16969043935372_600x600.jpg?v=1634224789.jpg'
  },
  {
    id: 20,
    name: 'Hibiscus',
    price: 18,
    imageUrl: 'https://nurserylive.com/cdn/shop/products/nurserylive-g-plants-hibiscus-gudhal-flower-yellow-plant-in-grower-round-black-pot-933541_600x600.jpg?v=1679750250.jpg'
  },
  // Add more plant objects as needed
];

const MenuPage = ({ addToCart }) => {
  return (
    <div>
      <div className='heading2'>
        <div className="plant-cards">
          {plantData.map(plant => (
            <PlantCard key={plant.id} plant={plant} addToCart={addToCart} />
          ))}
        </div>
        <div>
          <div className='footer-container'>
            <div className="footer">
              <h2>GREEN  House Plants </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;


