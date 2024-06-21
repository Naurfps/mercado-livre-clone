import { register } from 'swiper/element/bundle'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useState, useEffect } from 'react'
import './style.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

register();

const Slider = () => {

    const [slidePerView, setSlidePerView] = useState(3);
    const data = [
        {id: '1', image: 'https://cdn-icons-png.flaticon.com/512/1010/1010398.png'},
        {id: '2', image: 'https://cdn-icons-png.flaticon.com/512/117/117677.png'},
        {id: '3', image: 'https://cdn-icons-png.flaticon.com/512/1198/1198381.png'},
        {id: '4', image: 'https://cdn-icons-png.flaticon.com/512/0/191.png'},
        {id: '5', image: 'https://simpleicon.com/wp-content/uploads/flash.png'}
    ]

    useEffect(() => {

        function handleResize(){
            if(window.innerWidth < 720){
                setSlidePerView(3);
            }else{
                setSlidePerView(5);
            }
        }

    handleResize();

    window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }

    }, [])

  return (
    <div className='container'>
        <Swiper
        slidesPerView={slidePerView}
        pagination={{clickable: true}}
        navigation
    >
            {data.map((item) => (
                <SwiperSlide key={item.id}>
                    <img src={item.image} 
                    alt="Slider"
                    className='slide-item' 
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
  )
}

export default Slider