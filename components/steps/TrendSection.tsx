import React from "react";
import { title } from "../primitives";
import { Image } from "@nextui-org/image";
import Graph from "../Graph";

function CTA() {
  return (
    <section>
      <div className="px-5 py-16 md:px-10 md:py-24 lg:py-32">
        <div className="mx-auto mb-8 max-w-3xl text-center md:mb-12 lg:mb-16">
          <h2 className="text-3xl font-bold md:text-5xl">
            Elevating Creators Online Presence
          </h2>
          <p className="mx-auto mb-8 mt-4 max-w-lg  md:mb-12 lg:mb-16">
            I specialize in crafting compelling portfolios and landing page
            designs for fellow creators, startups, and online businesses.
          </p>
          {/* <Image
            src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635b53f37e968a0517a786f7_Mask%20group.png"
            alt=""
            className="w-full"
          /> */}
          <Graph />
        </div>
      </div>
    </section>
  );
}

export default CTA;
