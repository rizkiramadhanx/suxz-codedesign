import { styles } from '@/css/styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';
import Testimony1 from '@/assets/testimoni-1.png';

const Testimony = () => {
  return (
    <section className="bg-white">
      <div className={`${styles['main-container']}`}>
        <div className="py-[80px]">
          <div className="flex flex-col gap-y-4 text-center">
            <h2 className="text-purple-brand font-bold text-xl">TESTIMONIAL</h2>
            <h1 className="text-[44px] font-extrabold text-gray-brand">
              Our Alumni Say
            </h1>
            <p className="font-medium text-2xl text-gray-brand-2">
              These are the words of people who have taken our class
            </p>
          </div>
          <div className="mt-[57px] grid grid-cols-4">
            <div className="border-2 border-purple-brand rounded-[10px] h-[300px] w-[240px] pt-10 relative">
              <img src={Testimony1} alt="testimoni-1" className="child-testi" />
              <div className="text-center mt-7">
                <h1 className="text-[22px] font-bold text-gray-brand">
                  Cassandra K
                </h1>
                <h3 className="text-[#BAB8D2] text-[15px] ">Web Developer</h3>
                <p className="text-[17px]">
                  “The mentor is cool, how to convey each material is also
                  detailed and easy to understand..”
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimony;
