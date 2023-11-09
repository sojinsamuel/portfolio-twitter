/* eslint-disable @next/next/no-img-element */
"use client";

import { PlayIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import Link from "next/link";
import React from "react";

function About() {
  return (
    <section>
      <div className="mx-auto w-full max-w-7xl px-5 py-5 md:px-10 md:py-5 lg:py-5">
        <div className="grid gap-12 sm:gap-20 lg:grid-cols-2">
          <div className="flex flex-col items-start gap-2">
            <div className="flex items-center rounded-md bg-gradient-to-br from-[#FF1CF7] to-[#b249f8] px-3 py-1">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
              </span>{" "}
              <p className="text-sm">&nbsp;Available for work</p>
            </div>
            {/* <p className="text-sm text-[#808080] sm:text-xl">X Creator</p> */}
            <h1 className="my-6 text-4xl font-bold md:text-6xl lg:mb-8">
              Sobin Samuel
            </h1>
            <p className="text-sm text-[#808080] sm:text-xl">
              I&apos;m dedicated to making web tools that won&apos;t break the
              bank for X Creators like you. My goal? To make your daily tasks
              easier by providing solutions designed just for you.{" "}
            </p>
            <div className="mb-8 mt-8 h-px w-full bg-black dark:bg-white"></div>
            {/* <div className="mb-6 flex flex-col gap-2 text-sm text-[#808080] sm:text-base lg:mb-8">
              <p>
                <strong>2020: </strong>Site of the year in Awwwards.com
              </p>
              <p>
                <strong>2020: </strong>Site of the year in Awwwards.com
              </p>
            </div> */}
            {/* <a
              href="#"
              className="mb-6 flex items-center gap-2.5 text-center text-sm font-bold uppercase md:mb-10 lg:mb-12"
            >
              <p>All Achievements</p>
              <img
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64b1465d46adaf3f26099edf_arrow.svg"
                alt=""
                className="inline-block"
              />
            </a> */}
            <div className="flex flex-col gap-4 font-semibold sm:flex-row">
              <Button
                target="_blank"
                as={Link}
                href="https://twitter.com/RiseWithSobin"
                color="primary"
                className="px-8 font-semibold  md:mr-6 lg:mr-8"
              >
                Find me on X
              </Button>
              <a
                // target="_blank"
                // as={Link}
                href="mailto:sobinsamuel105@gmail.com"
                // variant="bordered"
                // startContent={<EnvelopeIcon width={20} height={20} />}
                className="flex gap-1 rounded-md border border-solid  px-6  justify-center items-center text-center border-black dark:border-white"
              >
                <EnvelopeIcon width={20} height={20} />
                Message
              </a>
            </div>
          </div>
          <Image width={400} src="/sobin-pic.jpg" alt="sobin samuel" />
          {/* <div className="min-h-[530px] overflow-hidden rounded-md bg-[#f2f2f7]"></div> */}
        </div>
      </div>
    </section>
  );
}

export default About;
