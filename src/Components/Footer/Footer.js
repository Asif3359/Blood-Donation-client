import { Facebook, GitHub, Instagram, LinkedIn } from '@mui/icons-material';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <section className='bg-black text-white '>
            <footer className="footer footer-center p-10 container mx-auto  text-base-content rounded">
                <nav className="grid grid-flow-col gap-4">
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <div className="grid grid-flow-col gap-4">
                       <Link href="https://www.facebook.com/1nothing90"><Facebook></Facebook></Link>
                       <Link href="https://www.linkedin.com/in/asif-ahammed-622a85264/"><LinkedIn></LinkedIn></Link>
                       <Link href="https://github.com/Asif3359"><GitHub></GitHub></Link>
                    </div>
                </nav>
                <aside>
                    <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
                </aside>
            </footer>
        </section>
    );
};

export default Footer;