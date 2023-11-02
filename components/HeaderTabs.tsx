"use client";

import React, { useState, useEffect } from "react";
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";
import CardAnimation from "./CardAnimation";
import SeoMeter from "./SeoMeter";

export default function HeaderTabs() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // if (!isMounted) return null;

  return (
    <div className="md:flex md:w-full md:justify-center hidden">
      <div className="w-[25em] ml-10">
        <Tabs
          color="primary"
          aria-label="Tabs colors"
          radius="lg"
          // className="w-[45em]"
          fullWidth
        >
          <Tab key="seo" title="SEO">
            <div className="absolute top-6  w-[400px] flex justify-center items-center">
              <SeoMeter />
            </div>
          </Tab>
          <Tab key="design" title="Designs">
            <div className="absolute top-[30px]  w-[300px] dark:shadow-lg dark:shadow-cyan-500/50 flex justify-start items-start ">
              <CardAnimation />
            </div>
          </Tab>
          <Tab key="videos" title="Videos">
            <div className="absolute top-5  w-[400px] flex justify-center items-center">
              Hola
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
