import { Swiper } from "swiper/react"
import { HeroSlide } from "./"

const Hero = () => {
  return (
    <div className="w-screen h-screen">
      <Swiper
        className="w-full h-full"
        slidesPerView={1}
      >
        <HeroSlide />
      </Swiper>
    </div>
  )
}

export default Hero