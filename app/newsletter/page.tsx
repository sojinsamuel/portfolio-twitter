"use client";

import Label from "@/components/Label";
import RenderTweets from "@/components/RenderTweets";
import SquigglyLines from "@/components/SquigglyLines";
import { subtitle, title } from "@/components/primitives";
import { Link } from "@nextui-org/link";
import { Card, CardFooter, CardHeader } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { User } from "@nextui-org/user";
import { useMemo, useState } from "react";

export default function NewsLetter() {
  const [email, setEmail] = useState("");

  const validateEmail = (email: string) =>
    email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isInvalid = useMemo(() => {
    if (email === "") return false;

    return validateEmail(email) ? false : true;
  }, [email]);

  function handleEmailSubscription(value: string) {
    setEmail(value);
  }

  return (
    <>
      <div className="flex flex-col">
        <Label />
        <h1 className={`${title()} text-center`}>
          Get Exclusive Creator Insights
        </h1>
        <User
          className="pt-9 text-3xl"
          name={<h2 className="text-lg">Sobin Samuel</h2>}
          description={<p>@RiseWithSobin</p>}
          avatarProps={{
            src: "/t-profile.jpg",
            size: "lg",
          }}
        />
        <p className="mt-5 text-center">
          Receive the same tips I used to double my engagement in just{" "}
          <strong>3 months!</strong>
        </p>

        <div className="relative flex justify-center items-center md:w-[28vw] w-[70vw] mx-auto">
          <Input
            classNames={{
              inputWrapper: "bg-default-100 mt-5 md:w-[28vw] w-[70vw]  ",
              input: "md:text-lg sm:text-md",
            }}
            type="email"
            variant="faded"
            size="lg"
            placeholder="Email Address"
            value={email}
            onValueChange={handleEmailSubscription}
            isInvalid={isInvalid}
            color={isInvalid ? "danger" : "success"}
            isDisabled
            // errorMessage={isInvalid && "Please enter a valid email"}
          />
          <Button
            color="primary"
            className="absolute  right-0 top-5 h-[48px]  min-h-fit overflow-y-auto"
            isDisabled
          >
            Try it
          </Button>
        </div>
      </div>
      <RenderTweets />
    </>
  );
}
