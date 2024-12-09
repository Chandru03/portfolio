import { useEffect } from 'react';

function NavBar() {

    useEffect(() => {
        const handleScroll = () => {
          const navbar = document.querySelector('.navBar');
          if (window.scrollY > 50) {  // Trigger after 50px scroll
            navbar.classList.add('scrolled');
          } else {
            navbar.classList.remove('scrolled');
          }
        };
      
        window.addEventListener('scroll', handleScroll);
        
        // Cleanup listener
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
  return (
    <div className="navBar">
      <h1>portfolio.</h1>
    </div>
  );
}
export default NavBar;