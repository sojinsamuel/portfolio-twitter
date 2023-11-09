import React from "react";

function HowItWorks() {
  return (
    <section>
      <div className="mx-auto w-full max-w-7xl px-5 py-10 md:px-10 md:py-10 lg:py-10">
        <p className="text-center text-lg font-bold uppercase">3 easy steps</p>
        <h2 className="text-center text-3xl font-bold md:text-5xl">
          How it works
        </h2>
        <p className="mx-auto mb-12 mt-4 max-w-lg text-center text-[#647084]">
          Streamlined Process
        </p>
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          <div className="flex flex-col gap-4 rounded-md border border-solid border-[#dfdfdf]  p-8 md:p-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#276ef1]">
              <p className="text-xl font-bold ">1</p>
            </div>
            <p className="text-xl font-semibold">Prepare</p>
            <p className="text-sm ">
              Gather your business information and outline your ideas for
              discussion.
            </p>
          </div>
          <div className="flex flex-col gap-4 rounded-md border border-solid   p-8 md:p-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#276ef1]">
              <p className="text-xl font-bold ">2</p>
            </div>
            <p className="text-xl font-semibold">Let&apos;s Chat</p>
            <p className="text-sm ">
              Schedule a one-on-one call to discuss your end goals and what
              problem are you expecting to solve.
            </p>
          </div>
          <div className="flex flex-col gap-4 rounded-md border border-solid   p-8 md:p-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#276ef1]">
              <p className="text-xl font-bold ">3</p>
            </div>
            <p className="text-xl font-semibold">Completion</p>
            <p className="text-sm ">
              I&apos;ll devise a custom solution for your needs, outlining the
              estimated time and investment required to realize your envisioned
              product.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
