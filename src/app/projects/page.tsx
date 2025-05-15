'use client'
import React, { useRef, useEffect, useState } from 'react'
import { projects } from '@/utils/data'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { slideInOut, TapText } from '@/components/Anime'
import { useTransitionRouter } from 'next-view-transitions'


const page = () => {

  const [visibleIndex, setVisibleIndex] = useState<number | null>(null)
  const refs = useRef<(HTMLDivElement | null)[]>([])

  const router = useTransitionRouter()
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number(entry.target.getAttribute('data-index'))
          if (entry.isIntersecting) {
            setVisibleIndex(idx)
            const element = refs.current[idx]
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' })
            }
          }
        })
      },
      { threshold: 0.99 }
    )
    refs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <div className='w-full h-[100dvh] flex flex-col bg-[#151515] overflow-y-scroll relative scroll-smooth snap-y snap-mandatory no-scrollbar'>
      <TapText>Tap!</TapText>
      {projects.map((project, index) => (
        <div
          key={project.id}
          ref={(el: HTMLDivElement) => { refs.current[index] = el; }}
          data-index={index}
          className="flex lg:flex-row flex-col items-center justify-between h-full w-full snap-start"
        >
          <div className="flex-1 flex items-center justify-start relative h-[100dvh]">
            <div className="text-sm fixed top-[8%] left-[5%] flex items-center justify-between">
              <span className='lg:left-[5%] lg:top-1/2 fixed transform lg:-translate-x-1/2 lg:-translate-y-1/2 text-sm'>
                (selected)
              </span>
              <AnimatePresence>
                {visibleIndex === index && (
                  <>
                    <motion.span
                      key={project.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="text-sm top-[8%] right-[11%] lg:text-5xl font-bold lg:left-[50%] lg:top-1/2 fixed lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2"
                    >
                      {project.id}
                    </motion.span>
                    <span
                      className="text-sm top-[8%] right-[5%] lg:text-5xl lg:ml-[4rem] font-bold lg:left-[50%] lg:top-1/2 fixed lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2"
                    >
                      / {projects.length}
                    </span>
                  </>
                )}
              </AnimatePresence>
            </div>
          </div>
          <div className="flex-1 flex h-[100dvh] w-full items-center justify-center ">
            <Link
              onClick={(e) => {
                e.preventDefault();
                router.push(`/projects/${project.id}`, {
                  onTransitionReady: slideInOut,
                })
              }}
              href={`/projects/${project.id}`}>
              <Image
                src={project.img}
                alt="Project Image"
                width={600}
                height={800}
                className="object-cover h-[100dvh] lg:h-[90dvh]"
              />
            </Link>
          </div>
        </div>
      ))
      }
    </div >
  )
}

export default page  