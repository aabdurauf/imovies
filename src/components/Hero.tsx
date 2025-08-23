import { Swiper, SwiperSlide } from "swiper/react"

const Hero = () => {
  return (
    <div className="w-screen h-screen">
      <Swiper
        className="w-full h-full"
        slidesPerView={1}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Hero