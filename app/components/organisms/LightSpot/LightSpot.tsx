"use client";

import { useEffect, useRef } from "react";
import "./LightSpot.scss";


export default function LightSpot() {
  const spotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      if (spotRef.current) {
        spotRef.current.style.left = `${e.clientX - 400}px`;
        spotRef.current.style.top = `${e.clientY - 400}px`;
      }
    }
    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return <div ref={spotRef} className="light-spot" />;
}