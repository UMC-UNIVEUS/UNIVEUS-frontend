import { Navigation, Autoplay, Pagination } from "swiper"
import { Swiper, SwiperSlide} from 'swiper/react'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

import bannerImage1 from '../assets/banner1.png'
import bannerImage2 from '../assets/banner2.png'
import '../styles/Banner.scss'


const Banner = () => {
    return (
        <div className="Banner">
            <Swiper
            modules={[Navigation, Autoplay, Pagination]}
            slidesPerView={1}
            loop
            autoplay={{delay: 5000, disableOnInteraction: false}}
            pagination={{clickable: 'true'}}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}>
                <SwiperSlide className="slide">
                    <img src={bannerImage1} className="slideimage" alt="" />
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <img src={bannerImage2} className="slideimage" alt=""/>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <img src={bannerImage1} className="slideimage" alt=""/>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <img src={bannerImage2} className="slideimage" alt=""/>
                </SwiperSlide>
            </Swiper>
        </div>
    )
};

export default Banner;