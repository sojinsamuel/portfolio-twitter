"use client";
import NextLink from "next/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import SquigglyLines from "@/components/SquigglyLines";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Link,
  Image,
  Input,
} from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import HeaderTabs from "@/components/HeaderTabs";

export default function Home() {
  return (
    <section className="flex flex-col items-start justify-center gap-4 py-8 md:py-5">
      <div className="flex md:items-end w-[95vw] relative md:justify-between justify-center">
        <div className="inline-block max-w-lg text-center justify-center leading-3">
          <h1 className={title()}>Ready to&nbsp;</h1>
          <h1 className={title({ color: "violet" })}>Elevate&nbsp;</h1>
          <br />
          <h1 className={title()}>your impact as an&nbsp;</h1>
          <br />
          <h1 className={title()}>
            <span className="relative whitespace-nowrap ">
              <SquigglyLines />
              <span className="relative">X Creator!</span>
            </span>
          </h1>
          <Card
            isBlurred
            className=" mt-16  bg-background/60 dark:bg-default-100/50 min-w-[5vw] dark:shadow-lg dark:shadow-cyan-500/50"
            shadow="lg"
            // className="mt-10 dark:shadow-lg dark:shadow-cyan-500/50 shadow-black"
          >
            <CardBody>
              <p className={`${subtitle()} mt-5`}>
                Hey, I&apos;m Sobin Samuel.
              </p>
              <p className={`${subtitle()} mt-2`}>
                I&apos;m determined to make a business in Tiruvalla successful.
                My only question is,{" "}
                <span className="text-[#0072F5] font-bold">
                  will it be yours?
                </span>
              </p>
              <div className="relative">
                <Input
                  className="mt-5 flex"
                  type="email"
                  variant="faded"
                  label="Email"
                  placeholder="Enter your email"
                />
                <Button
                  color="primary"
                  className="absolute top-[19px] h-[74%] right-0"
                >
                  Search
                </Button>
              </div>
            </CardBody>
          </Card>
        </div>
        {/* <div> */}
        <HeaderTabs />
        {/* </div> */}
      </div>
    </section>
  );
}
