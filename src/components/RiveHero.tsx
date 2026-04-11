"use client";

import { useRive } from "@rive-app/react-canvas";
import React from "react";

const RiveHero = ({ className }: { className?: string }) => {
  const { RiveComponent } = useRive({
    src: "/parallax_hero.riv",
    autoplay: true,
    stateMachines: "MainStateMachine",
  });

  return <RiveComponent className={className} />;
};

export default RiveHero;
