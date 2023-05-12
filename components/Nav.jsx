"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  const isLogged = true;

  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    const setProvider = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    setProvider();
  }, []);

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          alt="logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">Hall Of Prompt</p>
      </Link>

      {/* Desktop Navigation if user logged in */}
      <div className="sm:flex hidden">
        {isLogged ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
              Créer un prompt
            </Link>

            <button type="button" onClick={signOut} className="outline_btn">
              Déconnexion
            </button>

            <Link href="/profile">
              <Image
                src="/assets/images/profile.png"
                width={37}
                height={37}
                className="rounded-full"
                alt="profile"
                title="Profile"
              />
            </Link>
          </div>
        ) : (
          <>
            {/* desktop nav if user logged of */}
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className="black_btn"
                >
                  Se connecter
                </button>
              ))}
          </>
        )}
      </div>

      {/* Mobile Navigation if user logged in */}
      <div className="sm:hidden flex relative">
        {isLogged ? (
          <div className="flex">
            <Image
              src="/assets/images/profile.png"
              width={37}
              height={37}
              className="rounded-full"
              alt="profile"
              onClick={() => setToggleDropdown(!toggleDropdown)}
            />

            {toggleDropdown && (
              <div className="dropdown">
                <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  Mon Profile
                </Link>
                <Link
                  href="/create-prompt"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  Créer un prompt
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  className="mt-5 w-full black_btn"
                >
                  Déconnexion
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {/* mobile nav if user not logged in */}
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className="black_btn"
                >
                  Se connecter
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
