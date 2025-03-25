import React from "react";
import Image from 'next/image';
import { FaFacebook, FaInstagram } from "react-icons/fa";
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo */}
        <div className="col-span-1">
        <Image 
        src='/assets/icons/IBV-Logo.png'
        alt="Logo"
        width={120}
        height={120}
      />
        </div>

        {/* About IBV */}
        <div>
  <h3 className="text-gold font-semibold mb-4">About IBV</h3>
  <ul className="space-y-2 text-sm">
    <li>
      <Link 
        href="/about-us" 
        className="text-default hover:text-gold transition-colors duration-200 cursor-pointer"
      >
        About us
      </Link>
    </li>
    <li>
      <Link 
        href="/how-it-works" 
        className="text-default hover:text-gold transition-colors duration-200 cursor-pointer"
      >
        How it works
      </Link>
    </li>
    <li>
      <Link 
        href="/safety-security" 
        className="text-default hover:text-gold transition-colors duration-200 cursor-pointer"
      >
        Safety & Security
      </Link>
    </li>
    <li>
      <Link 
        href="/press-room" 
        className="text-default hover:text-gold transition-colors duration-200 cursor-pointer"
      >
        Press Room
      </Link>
    </li>
    <li>
      <Link 
        href="/contact" 
        className="text-default hover:text-gold transition-colors duration-200 cursor-pointer"
      >
        Contact Us
      </Link>
    </li>
  </ul>
</div>

{/* Services */}
<div>
  <h3 className="text-gold font-semibold mb-4">Services</h3>
  <ul className="space-y-2 text-sm">
    <li>
      <Link 
        href="/services" 
        className="text-default hover:text-gold transition-colors duration-200 cursor-pointer"
      >
        Safe Deposit Boxes
      </Link>
    </li>
    <li>
      <Link 
        href="/services" 
        className="text-default hover:text-gold transition-colors duration-200 cursor-pointer"
      >
        Jewellery Storage
      </Link>
    </li>
    <li>
      <Link 
        href="/services" 
        className="text-default hover:text-gold transition-colors duration-200 cursor-pointer"
      >
        Bullion Storage
      </Link>
    </li>
    <li>
      <Link 
        href="/services" 
        className="text-default hover:text-gold transition-colors duration-200 cursor-pointer"
      >
        Document Storage
      </Link>
    </li>
    <li>
      <Link 
        href="/services" 
        className="text-default hover:text-gold transition-colors duration-200 cursor-pointer"
      >
        Currency Storage
      </Link>
    </li>
    <li>
      <Link 
        href="/services" 
        className="text-default hover:text-gold transition-colors duration-200 cursor-pointer"
      >
        Bullion Sales
      </Link>
    </li>
  </ul>
</div>
        {/* Branches */}
        <div>
          <h3 className="text-gold font-semibold mb-4">Locate Us</h3>
          <ul className="space-y-2 text-sm">
            <li>298 Pitt St, Sydney NSW 2000, Australia</li>
            {/* <li>Dubai, UAE</li>
            <li>Cape Town, South Africa</li>
            <li>Park Square, South Africa</li>
            <li>Gateway, South Africa</li>
            <li>Musgrave, South Africa</li>
            <li>Sandton, South Africa</li>
            <li>Alice Lane, South Africa</li>
            <li>Rosebank, South Africa</li> */}
          </ul>
        </div>

        {/* Follow Us
        <div>
          <h3 className="text-gold font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <FaInstagram />
            <FaFacebook />
            
          </div>
        </div> */}
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-500">
        <p>
          Terms & Conditions | Privacy Policy | Copyright 2025 © IBV
          International Vaults
        </p>
      </div>
    </footer>
  );
};

export default Footer;