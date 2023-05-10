// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import image1 from "../images/image1.png";
import image2 from "../images/image2.png";
import image3 from "../images/image3.png";
import image4 from "../images/image4.png";
import image5 from "../images/image5.png";
import image6 from "../images/image6.png";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

// Define custom styles for the Swiper slider
const styles = {
  container: {
    backgroundColor: "#F3F4F6",
  },
  slide: {
    backgroundColor: "red",
  },
  arrow: {
    color: "white",
    textShadow: "1px 2px 9px #F4AAB9",
  },
};
// //
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
          delay: 1000,
          disableOnInteraction: false,
        }}
        speed={1000}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="lg:w-1/2 m-14 "
        style={styles.container}
      >
        <h2 className="text-3xl font-bold m-10 text-center sm:w-full">
          Stunning Webpages using React-JS
        </h2>
        <SwiperSlide style={styles.slide}>
          <img className="w-full sm:w-full" src={image1} alt="" />
        </SwiperSlide>
        <SwiperSlide style={styles.slide}>
          <img className="w-full sm:w-full" src={image2} alt="" />
        </SwiperSlide>
        <SwiperSlide style={styles.slide}>
          <img className="w-full" src={image3} alt="" />
        </SwiperSlide>
        <SwiperSlide style={styles.slide}>
          <img className="w-full sm:w-full" src={image4} alt="" />
        </SwiperSlide>
        <SwiperSlide style={styles.slide}>
          <img className="w-full sm:w-full" src={image5} alt="" />
        </SwiperSlide>
        <SwiperSlide style={styles.slide}>
          <img className="w-full sm:w-full" src={image6} alt="" />
        </SwiperSlide>

        <div className="swiper-button-next" style={styles.arrow}></div>
        <div className="swiper-button-prev" style={styles.arrow}></div>
      </Swiper>
    </>
  );
}
