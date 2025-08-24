import { Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const Hero = ({ movies }: any) => {
  return (
    <Swiper
      loop={true}
      slidesPerView={1}
      modules={[Autoplay]}
      className="w-full md:h-screen h-[460px]"
      autoplay={{
        delay: 5000,
        disableOnInteraction: false
      }}
    >
      {movies.map((movie: any) => (
        <SwiperSlide
          key={movie.id}
          style={{
            backgroundImage: `
              linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)),
              url('https://image.tmdb.org/t/p/original/${movie.backdrop_path}')
            `,
            backgroundPosition: "center",
            backgroundSize: "cover"
          }}
        />
      ))}
    </Swiper>
  )
}

export default Hero