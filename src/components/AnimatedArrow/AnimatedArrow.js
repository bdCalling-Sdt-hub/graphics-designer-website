import { ArrowRight } from "lucide-react";
import React from "react";

export default function AnimatedArrow({ size }) {
  return (
    <div className="relative overflow-hidden">
      <ArrowRight
        className="transition-all duration-500 ease-in-out-circ group-hover:translate-x-5"
        size={size || 17}
      />
      <ArrowRight
        className="absolute top-0 -translate-x-5 transition-all duration-500 ease-in-out-circ group-hover:translate-x-0"
        size={size || 17}
      />
    </div>
  );
}
