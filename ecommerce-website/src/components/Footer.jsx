import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto px-4">
                <div className="flex justify-center space-x-4">
                    
                    <Link href="/about" className="hover:underline">
                        About
                    </Link>
                    <Link href="/services" className="hover:underline">
                        Services
                    </Link>
                    <Link href="/contact" className="hover:underline">
                        Contact
                    </Link>
                </div>
                <div className="text-center mt-4">
                    <p className="text-sm">
                        © {new Date().getFullYear()} Ashish Y G. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
