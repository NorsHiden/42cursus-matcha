'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@nextui-org/react'

interface Image {
  src: string
  alt: string
}

// const Cards = [
//     {
//       name: "Julia Mauro",
//       image:
//         "https://images.unsplash.com/photo-1706885093476-b1e54f3b7496?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       fameRate: 1,
//     },
//     {
//       name: "Felix Mauro",
//       image:
//         "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       fameRate: 3,
//     },
//     {
//       name: "Marie Mauro",
//       image:
//         "https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       fameRate: 2,
//     },
//     {
//       name: "Vivian Mauro",
//       image:
//         "https://plus.unsplash.com/premium_photo-1708110920881-635419c3411f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       fameRate: 4,
//     },
//   ];

const images: Image[] = [
  { src: 'https://images.unsplash.com/photo-1706885093476-b1e54f3b7496?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Woman with brown headscarf' },
  { src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Person in white t-shirt' },
  { src: 'https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Another showcase image' },
]

export default function ImageShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const changeImage = (direction: 'prev' | 'next') => {
    setCurrentIndex((prevIndex) => {
      if (direction === 'prev') {
        return prevIndex === 0 ? images.length - 1 : prevIndex - 1
      } else {
        return (prevIndex + 1) % images.length
      }
    })
  }

  const getImageIndex = (offset: number) => {
    return (currentIndex + offset + images.length) % images.length
  }

  const renderImage = (offset: number, className: string) => (
    <div className={className}>
      <img
        src={images[getImageIndex(offset)].src}
        alt={offset === 0 ? images[currentIndex].alt : `${offset < 0 ? 'Previous' : 'Next'} image`}
        className="w-full h-full object-cover"
      />
    </div>
  )

  const renderButton = (direction: 'prev' | 'next') => (
    <Button
      onClick={() => changeImage(direction)}
      className={`absolute top-1/2 transform -translate-y-1/2 bg-secondary text-white rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-secondary ${
        direction === 'prev' ? 'left-4' : 'right-4'
      }`}
      aria-label={`${direction === 'prev' ? 'Previous' : 'Next'} image`}
    >
      {direction === 'prev' ? <ChevronLeft className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
    </Button>
  )

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      {renderImage(0, "relative aspect-[4/3] overflow-hidden rounded-3xl border-4 border-pink-500")}
      {renderImage(-1, "absolute left-[-50px] top-1/2 transform -translate-y-1/2 w-1/4 aspect-[4/3] overflow-hidden rounded-l-3xl opacity-50")}
      {renderImage(1, "absolute right-[-50px] top-1/2 transform -translate-y-1/2 w-1/4 aspect-[4/3] overflow-hidden rounded-r-3xl opacity-50")}
      {renderButton('prev')}
      {renderButton('next')}
    </div>
  )
}