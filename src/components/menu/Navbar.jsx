'use client'

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full bg-slate-900 py-2 shadow-lg shadow-black">
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
                  className="inline-block no-underline hover:text-black py-2 px-4"
                  href="/office"
                >
                  Oficina
                </Link>
              </li>
              <li>
                <Link
                  className="inline-block no-underline hover:text-black py-2 px-4"
                  href="/bedroom"
                >
                  Dormitorio
                </Link>
              </li>
              <li>
                <a
                  className="inline-block no-underline hover:text-black py-2 px-4"
                  href="/living "
                >
                  Living
                </a>
              </li>
              <li>
                <Link
                  className="inline-block no-underline hover:text-black py-2 px-4"
                  href="/kitchen "
                >
                  Cocina
                </Link>
              </li>
              <li>
                <Link
                  className="inline-block no-underline hover:text-black py-2 px-4"
                  href="/bathroom "
                >
                  Baño
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="#ffffff"
                d="M5 20v-9.15L2.2 13L1 11.4L12 3l4 3.05V4h3v4.35l4 3.05l-1.2 1.6l-2.8-2.15V20h-5v-6h-4v6zm5-9.975h4q0-.8-.6-1.313T12 8.2q-.8 0-1.4.513t-.6 1.312"
              />
            </svg>
            <h3 className="uppercase">
              Interior Design
            </h3>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
