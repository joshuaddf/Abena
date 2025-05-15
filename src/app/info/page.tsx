'use client'

import Image from 'next/image'
import { ImageReveal, StaggerText } from '@/components/Anime'

const Page = () => {

  return (
    <div className="flex flex-col items-center justify-between lg:flex-row w-full h-screen bg-[#151515] lg:pt-0 pt-16">
      <div className="lg:w-1/2 w-full flex flex-col items-center justify-center py-16 px-5 gap-6">
        <div className="w-full">
          <StaggerText className='pb-2'>
            (Abena)
          </StaggerText>
          <StaggerText className="text-sm lg:text-2xl text-white">
            Abena is a portrait photographer based in Accra, Ghana. She is a graduate of KNUST, where she studied computer science. She has a keen interest in photography and has been practicing for over 5 years. Abena's work focuses on capturing the beauty and essence of her subjects, often using natural light to create stunning images.
          </StaggerText>
        </div>
        {/* Uncomment if needed */}
        {/* <span className="text-sm font-semibold">
          <Link href="/"> ← Back</Link>
        </span> */}
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center relative">
        <ImageReveal>
          <Image
            src="/images/image7.webp"
            alt="image 7"
            width={1000}
            height={1000}
            className="w-full h-[100vh] object-cover"
          />
        </ImageReveal>
      </div>
    </div>
  )
}

export default Page