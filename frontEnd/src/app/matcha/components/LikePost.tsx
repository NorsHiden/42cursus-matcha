'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Heart } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@nextui-org/react"

interface PostLikeProps {
  initialLikeCount?: number
}

export default function PostLike({ initialLikeCount = 0 }: PostLikeProps) {
  const [isLiked, setIsLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(initialLikeCount)
  const [showAnimatedHeart, setShowAnimatedHeart] = useState(false)
  const doubleTapRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    return () => {
      if (doubleTapRef.current) {
        clearTimeout(doubleTapRef.current)
      }
    }
  }, [])

  const handleLike = () => {
    if (!isLiked) {
      setLikeCount(prevCount => prevCount + 1)
    } else {
      setLikeCount(prevCount => prevCount - 1)
    }
    setIsLiked(!isLiked)
  }

  const handleDoubleTap = () => {
    if (doubleTapRef.current) {
      clearTimeout(doubleTapRef.current)
      doubleTapRef.current = null
      if (!isLiked) {
        setIsLiked(true)
        setLikeCount(prevCount => prevCount + 1)
        setShowAnimatedHeart(true)
        setTimeout(() => setShowAnimatedHeart(false), 1000)
      }
    } else {
      doubleTapRef.current = setTimeout(() => {
        doubleTapRef.current = null
      }, 300)
    }
  }

  return (
    <div className="">

      <AnimatePresence>
        {showAnimatedHeart && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <Heart className="w-24 h-24 text-white filter drop-shadow-lg" fill="white" />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="flex items-center ">
        <Button
          isIconOnly
          size="lg"
          variant="light"
          color="primary"
          className="ml-0 text-white flex items-center space-x-1"
          onClick={handleLike}
          aria-label={isLiked ? 'Unlike' : 'Like'}
        >
          <Heart className={`w-6 h-6 ${isLiked ? 'text-red-500 fill-red-500' : ''}`} />
          <p>{likeCount}</p>
        </Button>
      </div>
    </div>
  )
}