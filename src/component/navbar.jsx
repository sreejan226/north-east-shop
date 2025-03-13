"use client";
import React from "react";
import { NavBarMenu } from "@/mockData/data";
import { FaDumbbell } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

function Navbar() {
  return (
    <>
      <nav>
        <div className="container m-2 py-8 flex justify-between mx-auto items-center">
          {/* logo section */}
          <div
            className="text-2xl flex items-center 
                    gap-2 font-bold uppercase"
          >
            <FaDumbbell />
            <p>Coders</p>
            <p className="text-amber-500">Shop</p>
          </div>
          {/* menu section */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-6 text-gray-600">
              {NavBarMenu.map((item) => {
                return (
                  <li key={item.id}>
                    <a
                      href={item.link}
                      className="inline-block py-1 px-3 
                        hover:text-amber-400  font-semibold"
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* icons section */}
          <div className="flex gap-4">
            <button className="text-2xl hover:text-white hover:rounded-full hover:bg-amber-400 p-2 duration-200">
              <CiSearch />
            </button>

            <button className="text-2xl hover:text-white hover:rounded-full hover:bg-amber-400 p-2 duration-200">
              <PiShoppingCartThin />
            </button>

            <SignedOut>
              <SignInButton />
              <SignUpButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
