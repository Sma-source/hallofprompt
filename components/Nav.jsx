"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  const isUserLoggedIn = false;

  const [providers, setProviders] = useState(null);

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
        <p className="logo_text">Hall Of Prompts</p>
      </Link>

      {/* Desktop Navigation */}
      <div className="sm:flex hidden">
        {/* Desktop Navigation when user logged in */}
        {isUserLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
              Crée un post
            </Link>
            <button type="button" onClick={signOut} className="outline_btn">
              Déconnexion
            </button>

            <Link href="/profile">
              <Image
                title="Profile"
                src="/assets/images/profile.png"
                width={37}
                height={37}
                className="rounded-full"
                alt="profile"
              />
            </Link>
          </div>
        ) : (
          // desktop navigation when user log off/ need to sign in
          <>
            {providers &&
              Object.values(providers).map((provider) => {
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >
                  Se connecter
                </button>;
              })}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
