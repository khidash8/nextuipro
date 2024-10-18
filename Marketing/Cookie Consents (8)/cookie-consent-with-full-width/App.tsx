import React from "react";
import {Button, Link} from "@nextui-org/react";

export default function Component() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 px-[21px] pb-[34px]">
      <div className="pointer-events-auto flex w-full items-center justify-between gap-x-20 rounded-large border border-divider bg-background/15 px-6 py-4 shadow-small backdrop-blur">
        <p className="text-small font-normal text-default-700">
          We use cookies on our website to give you the most relevant experience by remembering your
          preferences and repeat visits. By clicking&nbsp;
          <span className="font-semibold">“Accept All”</span>, you consent to the use of ALL the
          cookies. However, you may visit&nbsp;
          <span className="font-semibold">&quot;Cookie Settings&quot;</span> to provide a controlled
          consent. For more information, please read our{" "}
          <Link href="#" size="sm" underline="hover">
            Cookie Policy.
          </Link>
        </p>
        <div className="flex items-center gap-1">
          <Button
            className="px-4 font-medium"
            radius="lg"
            style={{
              border: "solid 2px transparent",
              backgroundImage: `linear-gradient(hsl(var(--nextui-background)), hsl(var(--nextui-background))), linear-gradient(83.87deg, #F54180, #9353D3)`,
              backgroundOrigin: "border-box",
              backgroundClip: "padding-box, border-box",
            }}
          >
            Accept All
          </Button>
          <Button className="font-medium" radius="lg" variant="light">
            Cookie Settings
          </Button>
        </div>
      </div>
    </div>
  );
}