import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import slider1 from "../../../assets/home/slide1.jpg";
import slider2 from "../../../assets/home/slide2.jpg";
import slider3 from "../../../assets/home/slide3.jpg";
import slider4 from "../../../assets/home/slide4.jpg";
import slider5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../comonents/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section className="md:px-48">
    <SectionTitle
        subHeading={'---From 11:00am to 10:00pm---'}
        heading={'ORDER ONLINE'}
    ></SectionTitle>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper my-16"
      >
        <SwiperSlide>
            <img src={slider1} alt="" />
            <h1 className="text-2xl text-white text-center -mt-20">SALADS</h1>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slider2} alt="" />
            <h1 className="text-2xl text-white text-center -mt-20">SOUPS</h1>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slider3} alt="" />
            <h1 className="text-2xl text-white text-center -mt-20">PIZZAS</h1>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slider4} alt="" />
            <h1 className="text-2xl text-white text-center -mt-20">DESSERTS</h1>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slider5} alt="" />
            <h1 className="text-2xl text-white text-center -mt-20">SALADS</h1>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slider2} alt="" />
            <h1 className="text-2xl text-white text-center -mt-20">SOUPS</h1>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
