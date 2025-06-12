import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './VideoCarousel.css';
import testimonial1 from './videos/v4.mp4';
import testimonial2 from './videos/v2.mp4';
import testimonial3 from './videos/v3.mp4';
const videos = [
    {
        id: 1,
        src: testimonial1,
    },
    {
        id: 2,
        src: testimonial2,
    },
    {
        id: 3,
        src: testimonial3,
    }
];
function VideoCarousel() {
    const videoRefs = useRef([]);
    const swiperRef = useRef(null);
    const handleSlideChange = (swiper) => {
        videoRefs.current.forEach((video, index) => {
            if (video) {
                if (index === swiper.realIndex) {
                    video.play().catch(() => { });
                } else {
                    video.pause();
                    video.currentTime = 0;
                }
            }
        });
    };
    const handleVideoPlay = () => {
        if (swiperRef.current?.autoplay) {
            swiperRef.current.autoplay.stop();
        }
    };
    const handleVideoPause = () => {
        if (swiperRef.current?.autoplay) {
            swiperRef.current.autoplay.start();
        }
    };
    return (
        <div className="video-carousel-container">
            <Swiper
                modules={[Navigation, Autoplay]}
                // navigation
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                onSlideChange={handleSlideChange}
                className="video-swiper"
            >
                {videos.map((video, index) => (
                    <SwiperSlide key={video.id} className="video-slide">
                        <div className="video-wrapper">
                            <video
                                ref={(el) => (videoRefs.current[index] = el)}
                                src={video.src}
                                muted
                                controls
                                playsInline
                                preload="none"
                                className="carousel-video"
                                onPlay={handleVideoPlay}
                                onPause={handleVideoPause}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
export default VideoCarousel;