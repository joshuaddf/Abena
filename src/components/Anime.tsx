import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import SplitType from "split-type";

export const slideInOut = () => {
    document.documentElement.animate(
        [
            {
                opacity: 1,
                scale: 1,
                transform: 'translateY(0)',
            },
            {
                opacity: 0.5,
                scale: 0.8,
                transform: 'translateY(-100px)',
            },
        ], {
        duration: 1000,
        easing: 'cubic-bezier(0.75, 0, 0.20, 1)',
        fill: 'forwards',
        pseudoElement: '::view-transition-old(root)',
    }
    );

    document.documentElement.animate(
        [
            {
                transform: 'translateY(100%)',
            },
            {
                transform: 'translateY(0)',
            },
        ], {
        duration: 1000,
        easing: 'cubic-bezier(0.75, 0, 0.20, 1)',
        fill: 'forwards',
        pseudoElement: '::view-transition-new(root)',
    }
    );
}

interface StaggerTextProps {
    children: React.ReactNode
    className?: string
}

export const StaggerText = ({
    children,
    className = '',
}: StaggerTextProps) => {
    const textRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!textRef.current) return;
        const text = new SplitType(textRef.current, { types: 'lines', tagName: 'div', lineClass: 'line' });

        const targets = textRef.current.querySelectorAll('.line ');

        gsap.set(targets, {
            yPercent: 100,
            clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
        });

        gsap.to(targets, {
            yPercent: 0,
            stagger: 0.06,
            duration: 2,
            ease: 'expo.out',
            delay: 0.7,
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        });

        return () => {
            text.revert();
        };
    }, { dependencies: [], scope: containerRef })

    return (
        <div ref={containerRef}>
            <div ref={textRef} className={className}>
                {children}
            </div>
        </div>
    )
}

interface ImageRevealProps {
    children: React.ReactNode,
}

export const ImageReveal = ({ children }: ImageRevealProps) => {
    const imageCoverRef = useRef<HTMLImageElement>(null)

    useGSAP(() => {
        if (!imageCoverRef.current) return

        gsap.set(imageCoverRef.current, {
            scaleX: 1,
            transformOrigin: 'left',
        })

        gsap.to(imageCoverRef.current, {
            scaleX: 0,
            duration: 1.5,
            ease: 'expo.inOut',
            delay: 0.7,
        })

    }, { scope: imageCoverRef })

    return (
        <>
            <div ref={imageCoverRef} className="absolute top-0 left-0 h-full w-full bg-[#151515]"></div>
            {children}
        </>
    )
}