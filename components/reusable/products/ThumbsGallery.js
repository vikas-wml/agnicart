import { React, useEffect, useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/pagination";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import ThumbsMobile from "./ThumbsMobile";

export default function ThumbsGallery({ data, images }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [galleryNavOpen, setGalleryNavOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const updateIndex = (swiperInstance) => {
    if (swiperInstance === null) return;
    const currentSlide = swiperInstance?.activeIndex;
    setCurrentIndex(currentSlide);
  };

  const swiperRef = useRef(null);

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const openGalleryNav = () => {
    setGalleryNavOpen(true);
  };
  const closeGalleryNav = () => {
    setGalleryNavOpen(false);
  };

  useEffect(() => {
    setCurrentIndex(currentIndex);
  }, [currentIndex]);

  return (
    <>
      <div className="hidden md:block space-y-2  w-full h-full">
        <div className="grid grid-cols-2 gap-x-2 gap-y-2 items-center justify-center col-span-3 w-full">
          {images &&
            images.map((item) => {
              return (
                <div key={item.id}>
                  <button onClick={openGalleryNav}>
                    <img src={item.image} alt="" className="w-full h-full" />
                  </button>
                </div>
              );
            })}
        </div>

        <div
          className={` bg-black bg-opacity-40 fixed top-0  bottom-0 left-0 right-0 -translate-y-2   z-[999] w-full h-full ${
            galleryNavOpen ? "block " : "hidden"
          } `}
        >
          <div className="w-[65%] mx-auto bg-white h-full p-5   ">
            <div className=" grid grid-cols-12 gap-x-6 items-start justify-center w-full">
              <div className=" col-span-1 h-[600px]">
                <Swiper
                  onSwiper={setThumbsSwiper}
                  direction="vertical"
                  spaceBetween={10}
                  slidesPerView={7}
                  freeMode={true}
                  watchSlidesProgress={true}
                  // autoplay={true}
                  // breakpoints={{
                  //   // Show only 1 image on small screens
                  //   0: {
                  //     slidesPerView: 6,
                  //     direction: "horizontal",
                  //   },
                  //   // Show 6 images and vertical direction on larger screens
                  //   768: {
                  //     slidesPerView: 6,
                  //     direction: "vertical",
                  //   },
                  // }}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper h-full col-span-1 "
                >
                  {images &&
                    images.map((image, index) => (
                      <SwiperSlide key={image.id}>
                        <button
                          onClick={() => setCurrentIndex(index)}
                          className={`${
                            currentIndex === index
                              ? `opacity-100`
                              : `opacity-20`
                          }`}
                        >
                          <img
                            src={image.thumbnail}
                            className=" cursor-pointer"
                          />
                        </button>
                      </SwiperSlide>
                    ))}
                </Swiper>
              </div>
              <div className=" col-span-10 relative">
                <Swiper
                  style={{
                    "--swiper-navigation-color": "#000",
                    "--swiper-pagination-color": "#000",
                  }}
                  ref={swiperRef}
                  spaceBetween={10}
                  // navigation={true}
                  initialSlide={currentIndex}
                  onActiveIndexChange={updateIndex}
                  thumbs={{ swiper: thumbsSwiper }}
                  // autoplay={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  onSlideChange={console.log("slide change")}
                  className="mySwiper2"
                >
                  {images &&
                    images.map((image) => (
                      <SwiperSlide key={image.id}>
                        <div>
                          <img src={image.image} className="w-full h-full" />
                        </div>
                      </SwiperSlide>
                    ))}
                </Swiper>
                <button
                  onClick={handlePrev}
                  className="absolute top-80 left-2  translate-y-40 z-20 border px-1 py-1 rounded-full bg-slate-400 hover:bg-slate-300 "
                >
                  <GoChevronLeft size="3rem" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute top-80 translate-y-40 right-2  z-20 border px-1 py-1 rounded-full bg-slate-400 hover:bg-slate-300   "
                >
                  <GoChevronRight size="3rem" />
                </button>
              </div>
              <div className="col-span-1">
                <button
                  onClick={closeGalleryNav}
                  className=" cursor-pointer border p-2 rounded-full "
                >
                  <IoMdClose size="1.4rem" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" block md:hidden">
        <ThumbsMobile data={data} images={images} />
      </div>
    </>
  );
}
