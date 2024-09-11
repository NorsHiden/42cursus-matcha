// import React from "react";

// const Images = [
//     "https://images.unsplash.com/photo-1725489890986-330621425633?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1721332155433-3a4b5446bcd9?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1725961476494-efa87ae3106a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1725988208207-a15e5f5eb5fb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1725958171072-808f8b8bd313?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// ];

// const MasonryGrid = () => {
//    return (
//     <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//       {Images.map((image, index) => (
//         <div key={index} className="relative overflow-hidden rounded-lg">
//           <img src={image} alt={`Landscape ${index + 1}`} className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
//           <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50">
//             <p className="text-white text-lg font-semibold">Image {index + 1}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//    );
// };

// export default MasonryGrid;

import React, { useState, useRef } from "react";
import {
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure,
  Button,
} from "@nextui-org/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
// import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const Images = [
  "https://images.unsplash.com/photo-1725489890986-330621425633?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1721332155433-3a4b5446bcd9?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1725961476494-efa87ae3106a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1725988208207-a15e5f5eb5fb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1725958171072-808f8b8bd313?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export default function MasonryGrid() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef<Slider>(null);

  const handleImageClick = (index: number) => {
    setActiveIndex(index);
    onOpen();
  };

  const goToPrev = () => {
    sliderRef.current?.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current?.slickNext();
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: activeIndex,
    beforeChange: (current: number, next: number) => setActiveIndex(next),
    // nextArrow: (
    //   <Button
    //     isIconOnly
    //     className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/50 hover:bg-white/80"
    //     onClick={goToNext}
    //   >
    //     <ChevronRightIcon className="w-6 h-6" />
    //   </Button>
    // ),
    // prevArrow: (
    //   <Button
    //     isIconOnly
    //     className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/50 hover:bg-white/80"
    //     onClick={goToPrev}
    //   >
    //     <ChevronLeftIcon className="w-6 h-6" />
    //   </Button>
    // ),
  };


  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {Images.slice(0, 4).map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg cursor-pointer"
            onClick={() => handleImageClick(index)}
          >
            <img
              src={image}
              alt={`Landscape ${index + 1}`}
              className="w-full h-40 object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 p-2 bg-black bg-opacity-50">
              <p className="text-white text-sm font-semibold">
                Image {index + 1}
              </p>
            </div>
          </div>
        ))}
        {Images.length > 4 && (
          <div
            className="relative overflow-hidden rounded-lg cursor-pointer bg-gray-200 flex items-center justify-center h-40"
            onClick={() => handleImageClick(4)}
          >
            <p className="text-2xl font-bold text-gray-600">
              +{Images.length - 4}
            </p>
          </div>
        )}
      </div>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="5xl"
        className=" bg-[#130F1F] no-scrollbar"
      >
        <ModalContent>
          <ModalBody className="relative">
            <Slider ref={sliderRef} {...settings}>
              {Images.map((image, index) => (
                <div key={index} className="p-4">
                  <img
                    src={image}
                    alt={`Landscape ${index + 1}`}
                    className="w-full h-[60vh] object-cover rounded-lg"
                  />
                </div>
              ))}
            </Slider>
            {/* <Button
              isIconOnly
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/50 hover:bg-white/80"
              onClick={goToPrev}
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </Button> */}
            {/* <Button
              isIconOnly
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/50 hover:bg-white/80"
              onClick={goToNext}
            >
              <ChevronRightIcon className="w-6 h-6" />
            </Button> */}
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}
