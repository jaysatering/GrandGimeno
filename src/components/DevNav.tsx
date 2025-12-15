import { Link, useLocation } from 'react-router-dom';

export default function DevNav() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="dev-nav">
      <p className="dev-nav-label">DEV NAV</p>
      <div className="dev-nav-links">
        <Link 
          to="/" 
          className={isActive('/') ? 'dev-nav-link dev-nav-link-active' : 'dev-nav-link'}
        >
          Home
        </Link>
        <Link 
          to="/thank-you" 
          className={isActive('/thank-you') ? 'dev-nav-link dev-nav-link-active' : 'dev-nav-link'}
        >
          Thank You
        </Link>
        <Link 
          to="/private" 
          className={isActive('/private') ? 'dev-nav-link dev-nav-link-active' : 'dev-nav-link'}
        >
          Private
        </Link>
      </div>
    </div>
  );
}
