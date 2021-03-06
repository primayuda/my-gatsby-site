// Step 1 : import your dependencies
import * as React from 'react';
import { Link } from 'gatsby';
import { 
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText
 } from './layout.module.css';

// Step 2 : define your components
const Layout = ({pageTitle, children}) => {
    return (
        <div className={container}>
            <title>{pageTitle}</title>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}>
                        <Link to="/" className={navLinkText}>
                            Home
                        </Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/about" className={navLinkText}>
                            About
                        </Link>
                    </li>
                </ul>
            </nav>
            <main>
                <h1 className={heading}>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

// Step 3 : export your components
export default Layout