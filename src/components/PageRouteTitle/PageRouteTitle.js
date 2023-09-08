import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function PageRouteTitle() {
  const location = useLocation();
  
  useEffect(() => {
    let title = "Russet | Natural Foods | Restaurant"; 

    switch (location.pathname) {
      case '/menu':
        title = "Russet - Menu";
        break;
      case '/reservation':
        title = "Russet - Reservation";
        break;
      default:
        break;
    }

    document.title = title;
  }, [location]);

  return null;  
}

export default PageRouteTitle;
