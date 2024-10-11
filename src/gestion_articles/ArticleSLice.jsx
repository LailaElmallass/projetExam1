import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    articles: [
      { id: 1, designation: 'Laptop Lenovo', famille: 'Informatique', image: 'https://m.media-amazon.com/images/I/61v6fw5BpIL._AC_UF1000,1000_QL80_.jpg' },
      { id: 2, designation: 'Clavier mécanique', famille: 'Informatique', image: 'https://papay.ma/930-large_default/aula-s2016-clavier-mecanique-blanc-104-touches-retroeclaires-.jpg' },
      { id: 3, designation: 'Fauteuil de bureau', famille: 'Mobilier', image: 'https://m.media-amazon.com/images/I/31JV5s1VwuS._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg' },
      { id: 4, designation: 'Imprimante Canon', famille: 'Informatique', image: 'https://i.pinimg.com/474x/d3/ec/38/d3ec38d25cd844195ea34c6c2844084a.jpg' },
      { id: 5, designation: 'Smartphone Samsung', famille: 'Téléphonie', image: 'https://www.yubingo.com/cdn/shop/products/PS1321-cute-loving-animals-girly-trendy-phonecase-for-samsung-galaxy-a03-core-hard-plastic_1600x.jpg?v=1689458941' },
      { id: 6, designation: 'Tablette iPad', famille: 'Informatique', image: 'https://i5.walmartimages.com/seo/iPad-Keyboard-Case-Pro-9-7-Inch-New-2018-iPad-2017-Air-1-2-Bluetooth-130-Smart-Folio-Hard-Back-Cover-Ultra-Slim-Auto-Wake-Sleep-Rose-Gold_eaa8b8f4-3e73-4481-a528-eefa96c26250.549f9ee92e8e2f86bb74d20a08a9440f.jpeg' },
      { id: 7, designation: 'Bureau en bois', famille: 'Mobilier', image: 'https://mademoisellejoyce.fr/coinbureaufemmeroseetblanc/' },
      { id: 8, designation: 'Casque audio Sony', famille: 'Audio', image: 'https://m.media-amazon.com/images/I/51tQ-9N1bvL._AC_UF350,350_QL80_.jpg' },
      { id: 9, designation: 'Disque dur externe', famille: 'Informatique', image: 'https://ae01.alicdn.com/kf/H6707957f7f82475db27d8539c4262c7fr/Disque-Dur-Externe-HDD-2-5-Color-ABS-Dispositif-de-Stockage-Portable-pour-Ordinateur-USB-3.jpg' },
      { id: 10, designation: 'Télévision LG 4K', famille: 'Électronique', image: 'https://www.lg.com/africa_fr/images/television/md07597819/gallery/large04.jpg' },
      { id: 11, designation: 'Chaise ergonomique', famille: 'Mobilier', image: 'https://www.picclickimg.com/4i8AAOSwHUtmFhi1/Chaise-de-bureau-de-direction-chaise-de-jeu.webp' },
      { id: 12, designation: 'Souris gaming', famille: 'Informatique', image: 'https://ae01.alicdn.com/kf/S1c2714354a94468c85a869cbc8c2ac1cq/Souris-de-jeu-filaire-USB-sept-boutons-rose-mignon-tendu-malol-esports-lueur-sept-couleurs.jpg' },
      { id: 13, designation: 'Caméra de surveillance', famille: 'Sécurité', image: 'https://easystore-prod.s3.ap-south-1.amazonaws.com/public/assets/uploads/china%20products/NOgzl4JoyuhauFpXIvNqpPxYoBMgtu789djR3dug.webp' },
      { id: 14, designation: 'Enceinte Bluetooth JBL', famille: 'Audio', image: 'https://m.media-amazon.com/images/I/71rEDaWOmdL._AC_UF894,1000_QL80_.jpg' },
      { id: 15, designation: 'Réfrigérateur Samsung', famille: 'Électroménager', image: 'https://www.coastappliances.ca/cdn/shop/files/UGP-275LBPAC-1_large.jpg?v=1715028381' },
      { id: 16, designation: 'Micro-ondes Whirlpool', famille: 'Électroménager', image: 'https://switchelectro.ma/cdn/shop/files/Captured_ecran2023-10-09135705_580x.png?v=1696853161' },
      { id: 17, designation: 'Climatiseur portable', famille: 'Climatisation', image: 'https://m.media-amazon.com/images/I/51SqEqCD3GL.jpg' },
      { id: 18, designation: 'Tapis de souris', famille: 'Informatique', image: 'https://i.etsystatic.com/24922469/r/il/a958e6/3303287128/il_570xN.3303287128_65f0.jpg' },
      { id: 19, designation: 'Ventilateur sur pied', famille: 'Climatisation', image: 'https://media.cecotec.cloud/08204/energysilence-250-classicstyle-pink_0i2oj7_1.png' },
      { id: 20, designation: 'Webcam Logitech', famille: 'Informatique', image: 'https://fetch.officechoice.com.au/images/ProductImages/500/3034935.jpeg' },
    ],
  };
  
  

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    addArticle: (state, action) => {
      state.articles.push(action.payload);
    },
    deleteArticle: (state, action) => {
      state.articles = state.articles.filter(article => article.id !== action.payload);
    },
  },
});

export const { addArticle, deleteArticle } = articlesSlice.actions;
export default articlesSlice.reducer;
