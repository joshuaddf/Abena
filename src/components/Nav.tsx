'use client'
import React, { use, useRef } from 'react'
import Wrapper from './Wrapper'
import Link from 'next/link'
import { useTransitionRouter } from 'next-view-transitions'
import { slideInOut } from './Anime'
import gsap from 'gsap'
import SplitType from 'split-type'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP);

const Nav = () => {

    const navRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {

        if (!navRef.current) return null;
        const nav = new SplitType(navRef.current, { types: 'words' });

        gsap.set(nav.words, {
            y: -100,
            display: 'block',
        });

        gsap.to(nav.words, {
            y: 0,
            duration: 0.8,
            stagger: 0.09,
            ease: 'power2.out',
            delay: 1
        })

    }, { scope: navRef })

    const router = useTransitionRouter();

    return (
        <nav className='fixed top-0 left-0 right-0 z-20' >
            <Wrapper>
                <div ref={navRef} className="flex items-center justify-between w-full h-16">
                    <div className="text-lg font-semibold">
                        <Link
                            onClick={(e) => {
                                e.preventDefault();
                                router.push('/', {
                                    onTransitionReady: slideInOut,
                                })
                            }}
                            href='/'>Index</Link>
                    </div>
                    <div className="">
                        <div className="flex items-center space-x-4 text-sm font-semi">
                            <Link
                                onClick={(e) => {
                                    e.preventDefault();
                                    router.push('/projects', {
                                        onTransitionReady: slideInOut,
                                    })
                                }}
                                href='/projects'>Projects</Link>
                            <Link
                                onClick={(e) => {
                                    e.preventDefault();
                                    router.push('/info', {
                                        onTransitionReady: slideInOut,
                                    })
                                }}
                                href='/info'>Info</Link>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </nav >
    )
}

export default Nav