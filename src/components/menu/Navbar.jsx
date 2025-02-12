'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full bg-slate-900 py-2 shadow shadow-black" id="hero">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 md:px-32 py-3">
        <button onClick={toggleMenu} className="lg:hidden block">
          {!isMenuOpen ? (
            <svg
              className="fill-current text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#fff"
                stroke-linecap="round"
                stroke-width="2"
                d="M20 20L4 4m16 0L4 20"
              />
            </svg>
          )}
        </button>
        <div
          className={`lg:block ${
            isMenuOpen ? "block" : "hidden"
          } md:items-center md:w-auto w-full order-3 md:order-1`}
        >
          <nav>
            <ul className="lg:flex items-center justify-between text-base text-white pt-4 md:pt-0">
              <li>
                <Link
                  className="inline-block no-underline hover:text-yellow-100 py-2 px-4"
                  href="/office"
                >
                  Oficina
                </Link>
              </li>
              <li>
                <Link
                  className="inline-block no-underline hover:text-yellow-100 py-2 px-4"
                  href="/bedroom"
                >
                  Dormitorio
                </Link>
              </li>
              <li>
                <a
                  className="inline-block no-underline hover:text-yellow-100 py-2 px-4"
                  href="/living "
                >
                  Living
                </a>
              </li>
              <li>
                <Link
                  className="inline-block no-underline hover:text-yellow-100 py-2 px-4"
                  href="/kitchen "
                >
                  Cocina
                </Link>
              </li>
              <li>
                <Link
                  className="inline-block no-underline hover:text-yellow-100 py-2 px-4"
                  href="/bathroom "
                >
                  Baño
                </Link>
              </li>
              <li>
                <Link
                  className="inline-block no-underline hover:text-yellow-100 py-2 px-4"
                  href="/contact "
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <Link
            className="flex gap-4 items-center font-bold text-slate-100 text-xl"
            href="/"
          >
            <Image src= "/images/logo-png.png" alt="logo" width={200} height={300} className="w-5/6 md:w-full" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
