import { useEffect, useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/pagination";

import { FreeMode, Navigation, Thumbs, Pagination } from "swiper/modules";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

export default function ThumbsMobile({ data, images }) {
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
      <div>
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {images &&
            images.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <button onClick={openGalleryNav}>
                    <img src={item.image} alt="" className="w-full h-full" />
                  </button>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
      <div
        className={` bg-black bg-opacity-40 fixed top-0  bottom-0 left-0 right-0   z-[999] w-full ${
          galleryNavOpen ? "block " : "hidden"
        } `}
      >
        <div className=" w-[100vh] h-[100vh] bg-white    ">
          <div className=" grid grid-cols-1  items-start justify-center w-full">
            <div className=" w-[415px] relative z-10">
              <Swiper
                style={{
                  "--swiper-navigation-color": "#000",
                  "--swiper-pagination-color": "#000",
                }}
                ref={swiperRef}
                initialSlide={currentIndex}
                onActiveIndexChange={updateIndex}
                spaceBetween={10}
                // navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                onSlideChange={() => console.log("slide change")}
                className="mySwiper2"
              >
                {images &&
                  images.map((image) => (
                    <SwiperSlide key={image.id}>
                      <div>
                        <img src={image.image} className="" />
                      </div>
                    </SwiperSlide>
                  ))}
              </Swiper>
              <button
                onClick={handlePrev}
                className="absolute top-80 left-2  translate-y-20 z-20 border px-1 py-1 rounded-full bg-slate-400 hover:bg-slate-300 "
              >
                <GoChevronLeft size="3rem" />
              </button>
              <button
                onClick={handleNext}
                className="absolute top-80 translate-y-20 right-2  z-20 border px-1 py-1 rounded-full bg-slate-400 hover:bg-slate-300   "
              >
                <GoChevronRight size="3rem" />
              </button>
              <button
                onClick={closeGalleryNav}
                className=" cursor-pointer border p-2 rounded-full absolute top-4 right-4 z-20 "
              >
                <IoMdClose size="1.4rem" />
              </button>
            </div>
            <div className="w-[415px] ">
              <Swiper
                onSwiper={setThumbsSwiper}
                direction="horizontal"
                spaceBetween={0}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper h-full col-span-1 "
              >
                {images &&
                  images.map((image, index) => (
                    <SwiperSlide key={image.id}>
                      <button
                        onClick={() => setCurrentIndex(index)}
                        className={`${
                          currentIndex === index ? `opacity-100` : `opacity-20`
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
          </div>
        </div>
      </div>
    </>
  );
}
