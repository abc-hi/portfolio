// This component scrolls the page to the top whenever the route changes
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = ({ children }) => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return children;
};

export default ScrollToTop;

// x → horizontal position (left ↔ right)
// y → vertical position (top ↕ bottom)
// x = 0 → go to far left
// y = 0 → go to top of the page