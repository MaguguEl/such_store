// In your FontAwesome library configuration file (typically fontAwesome.js or icons.js)
import { library } from '@fortawesome/fontawesome-svg-core';
import { 
  faHeart as fasHeart,
  faShoppingCart,
  faUser,
  faSignInAlt,
  faSearch,
  faBell,
  faAngleRight,
  faMinus, 
  faPlus, 
  faLeaf, 
  faStar as solidStar 
} from '@fortawesome/free-solid-svg-icons';
import { 
  faHeart as farHeart,
  faStar as regularStar 
} from '@fortawesome/free-regular-svg-icons';
import { 
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faWhatsapp 
} from '@fortawesome/free-brands-svg-icons';

library.add(
  // Solid icons
  fasHeart,
  faShoppingCart,
  faUser,
  faSignInAlt,
  faSearch,
  faBell,
  faAngleRight,
  faMinus,
  faPlus,
  faLeaf,
  solidStar,
  
  // Regular icons
  farHeart,
  regularStar,
  
  // Brand icons
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faWhatsapp
);