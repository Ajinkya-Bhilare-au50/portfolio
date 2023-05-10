// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import image1 from "../images/image1.jpg";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

// Define custom styles for the Swiper slider
const styles = {
  container: {
    backgroundColor: "blue",
  },
  slide: {
    backgroundColor: "red",
  },
  arrow: {
    color: "white",
    textShadow: "1px 2px 9px #F4AAB9",
  },
};

export default function App() {
  return (
    <>
      <Swiper
        pagination={{
          type: "progressbar",
          progressBarColor: "green",
        }}
        slidesPerView={1}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        speed={1000}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-1/2 m-14"
        style={styles.container}
      >
        <SwiperSlide style={styles.slide}>
          <img className="w-full sm:w-full" src={image1} alt="" />
        </SwiperSlide>
        <SwiperSlide style={styles.slide}>
          <img className="w-full sm:w-full" src={image1} alt="" />
        </SwiperSlide>
        <SwiperSlide style={styles.slide}>
          <img className="w-full" src={image1} alt="" />
        </SwiperSlide>
        <SwiperSlide style={styles.slide}>
          <img className="w-full sm:w-full" src={image1} alt="" />
        </SwiperSlide>
        <SwiperSlide style={styles.slide}>
          <img className="w-full sm:w-full" src={image1} alt="" />
        </SwiperSlide>
        <SwiperSlide style={styles.slide}>
          <img className="w-full sm:w-full" src={image1} alt="" />
        </SwiperSlide>
        <SwiperSlide style={styles.slide}>
          <img className="w-full sm:w-full" src={image1} alt="" />
        </SwiperSlide>
        <SwiperSlide style={styles.slide}>
          <img className="w-full sm:w-full" src={image1} alt="" />
        </SwiperSlide>
        <SwiperSlide style={styles.slide}>
          <img className="w-full sm:w-full object-cover" src={image1} alt="" />
        </SwiperSlide>

        <div className="swiper-button-next" style={styles.arrow}></div>
        <div className="swiper-button-prev" style={styles.arrow}></div>
      </Swiper>
    </>
  );
}
