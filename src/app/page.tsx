'use client'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import SplitType from "split-type";

export default function Home() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    if (!titleRef.current) return;

    const heroText = new SplitType(titleRef.current, { types: 'chars' });

    gsap.set(heroText.chars, {
      y: 400, 
    });

    gsap.to(heroText.chars, {
      duration: 1,
      y: 0,
      stagger: 0.07,
      ease: 'power4.out',
      delay: 1.3,
    });

  }, { scope: titleRef });

  return (
    <div className="w-screen h-[100dvh] flex items-center justify-center bg-[#151515]">
      <h1
        className="uppercase text-[20vw] tracking-tight font-bold"
        ref={titleRef}
        style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
      >
        Abena
      </h1>
    </div>
  );
}
