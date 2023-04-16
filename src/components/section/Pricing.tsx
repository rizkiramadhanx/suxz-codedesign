import { styles } from '@/css/styles';
import React from 'react';
import Pricing1 from '@/assets/pricing-1.png';

const Pricing = () => {
  return (
    <section className="bg-[#F8F8FF]">
      <div className={`${styles['main-container']}`}>
        <div className="py-[80px]">
          <div className="grid md:grid-cols-2 grid-cols-1">
            <div>
              <h2 className="text-xl font-bold text-purple-brand leading-[27px]">
                LEARNINGS
              </h2>
              <h1 className="font-bold text-[44px] leading-[60px]">
                Online Learning Platform International Curriculum
              </h1>
              <p className="text-[22px] font-medium">
                Study and understand the material class is more relaxed without
                time limit.
              </p>
            </div>
            <div></div>
          </div>
          <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-x-[70px] gap-y-5 mt-[60px]">
            {[1, 1, 1, 1].map((_, key) => (
              <div
                className="p-[30px] bg-white rounded-[12px] hover:bg-purple-brand hover:scale-105 transition-all hover:origin-top hover:text-white text-gray-brand-2 delay-100"
                key={key}
              >
                <img src={Pricing1} alt={`Pricing ${key}`} />
                <div className="mt-[30px] ">
                  <h2 className=" font-bold text-xl">Starter</h2>
                  <p className="font-normal text-sm">
                    Free class access for that start learning code and design
                  </p>
                </div>
                <button className="mt-[30px] bg-gradient-to-r font-semibold  from-green-500 to-purple-brand w-full rounded-md py-1 text-white">
                  See Class
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
