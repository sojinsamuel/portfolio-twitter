"use client";

import { Link } from "@nextui-org/link";
import { Image } from "@nextui-org/image";
import React from "react";

function Footer() {
  return (
    <footer className="block">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
        <div className="flex flex-col items-center">
          {/* <h1 className="text-3xl font-bold text-[#276ef1]">Sobin Samuel</h1> */}
          <div className="max-[991px]: text-center font-semibold max-[991px]:py-1">
            <Link
              href="/"
              className="inline-block px-6 py-2 font-normal  transition hover:text-[#d6a701]"
            >
              Home
            </Link>
            {/* <Link
              href="#"
              className="inline-block px-6 py-2 font-normal  transition hover:text-[#d6a701]"
            >
              Tools
            </Link> */}
            <Link
              href="/about"
              className="inline-block px-6 py-2 font-normal  transition hover:text-[#d6a701]"
            >
              About
            </Link>
            <Link
              href="newsletter"
              className="inline-block px-6 py-2 font-normal  transition hover:text-[#d6a701]"
            >
              Newsletter
            </Link>
          </div>
          <div className="mb-8 mt-8 w-48 border-b-1 border-black dark:border-white"></div>
          <div className="mb-12   w-full max-w-[208px] gap-3 flex justify-center items-center">
            <Link
              href="#"
              className="mx-auto flex max-w-[24px] flex-col items-center justify-center"
            >
              <Image
                src="/x.png"
                width={20}
                height={20}
                alt="sobin x logo"
                className="inline-block bg-white h-5 w-24"
              />
            </Link>
            {/* <Link
              href="#"
              className="mx-auto flex max-w-[24px] flex-col items-center justify-center"
            >
              <img
                src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358f65864ee6f4870bbe5cb_InstagramLogo.svg"
                alt=""
                className="inline-block"
              />
            </Link>
            <Link
              href="#"
              className="mx-auto flex max-w-[24px] flex-col items-center justify-center"
            >
              <img
                src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358f65ab9fdec6c06b596f6_SlackLogo.svg"
                alt=""
                className="inline-block"
              />
            </Link>
            <Link
              href="#"
              className="mx-auto flex max-w-[24px] flex-col items-center justify-center"
            >
              <img
                src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358f65b64ee6f2f15bbe5e0_TwitterLogo.svg"
                alt=""
                className="inline-block"
              />
            </Link> */}
          </div>
          <p className="max-[479px]:text-sm">
            © Copyright {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
