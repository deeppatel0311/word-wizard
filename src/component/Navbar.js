import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav style={{background: 'linear-gradient(to right, #2563eb, #9333ea)', padding: '1rem'}}>
            <div style={{maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <Link to="/" style={{color: 'white', textDecoration: 'none', fontSize: '1.5rem', fontWeight: 'bold'}}>
                    WordWizard
                </Link>
                <div style={{display: 'flex', gap: '2rem'}}>
                    <Link to="/" style={{color: 'white', textDecoration: 'none'}}>
                        Home
                    </Link>
                    <Link to="/about" style={{color: 'white', textDecoration: 'none'}}>
                        About
                    </Link>
                </div>
            </div>
        </nav>
    )
}
