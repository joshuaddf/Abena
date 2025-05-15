'use client'
import React from 'react'
import { projects } from '@/utils/data'
import Image from 'next/image'
import Wrapper from '@/components/Wrapper'
import Link from 'next/link'
import { useTransitionRouter } from 'next-view-transitions'
import { ImageReveal, slideInOut, StaggerText } from '@/components/Anime'

const page = ({ params }: { params: Promise<{ id: number }> }) => {
    const router = useTransitionRouter()
    const actualParams = React.use(params)
    const project = projects.find(p => p.id === Number(actualParams.id))

    if (!project) {
        return <h1 className='flex items-center justify-center text-[5vw] w-screen h-screen'>Project doesn't exist.</h1>
    }

    return (
        <div className='w-full h-[100dvh] py-14 bg-[#151515]'>
            <Wrapper className='grid grid-cols-1 lg:grid-cols-2 justify-center gap-6'>
                <div className=" text-sm w-full h-full">
                    <div className="py-8">
                        <StaggerText>(Description)</StaggerText>
                        <StaggerText>
                            {project.description}
                        </StaggerText>
                    </div>
                    <div className="grid grid-cols-2 gap-12 pb-6">
                        <div className="">
                            <StaggerText>(Tag)</StaggerText>
                            <StaggerText>{project.tag}</StaggerText>
                        </div>
                        <div className="">
                            <StaggerText>(Genre)</StaggerText>
                            <StaggerText>{project.genre}</StaggerText>
                        </div>
                        <div className="">
                            <StaggerText>(Date)</StaggerText>
                            <StaggerText>{project.date}</StaggerText>
                        </div>
                        <div className="">
                            <StaggerText>(Color)</StaggerText>
                            <StaggerText>{project.color}</StaggerText>
                        </div>
                    </div>
                    <span className='mt-6 block'>
                        <Link
                            onClick={(e) => {
                                e.preventDefault()
                                router.push('/projects', {
                                    onTransitionReady: slideInOut,
                                })
                            }}
                            href='/projects'
                        >&larr; Back to projects</Link>
                    </span>
                </div>
                <div className="w-full h-full flex items-center justify-end relative">
                    <ImageReveal>
                        <Image
                            src={project.img}
                            width={1000}
                            height={1000}
                            alt={project.description}
                            className='w-full h-[100%] lg:w-[60%] lg:h-[90vh]'
                        />
                    </ImageReveal>
                </div>
            </Wrapper>
        </div>
    )
}

export default page