import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
  Input,
} from "@nextui-org/react";
import { InformationCircleIcon } from "@heroicons/react/24/solid";

export default function MoreInfo() {
  return (
    <div className="flex flex-wrap gap-4">
      <Popover showArrow offset={50} placement="top-start" backdrop="blur">
        <PopoverTrigger>
          <InformationCircleIcon
            className="cursor-pointer"
            width={30}
            height={25}
          />
        </PopoverTrigger>
        <PopoverContent className="w-[340px]">
          {(titleProps: any) => (
            <div className="px-1 py-2 w-full">
              <p
                className="text-small font-bold text-foreground"
                {...titleProps}
              >
                The rating Google gives your site based on a combination of
                performance, accessibility, SEO, and best practice criteria in
                artificial conditions that mimic real ones.
              </p>
            </div>
          )}
        </PopoverContent>
      </Popover>
    </div>
  );
}
