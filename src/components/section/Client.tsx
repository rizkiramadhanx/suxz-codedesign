import React from 'react';
import Marquee from 'react-fast-marquee';

import { styles } from '@/css/styles';

import Github from '@/assets/client/Github.svg';
import Amazon from '@/assets/client/Amazon.svg';
import Linkedin from '@/assets/client/Linkedin.svg';
import Medium from '@/assets/client/Medium.svg';
import Paypal from '@/assets/client/Paypal.svg';
import Redis from '@/assets/client/Redis.svg';
import Microsoft from '@/assets/client/Microsoft.svg';
import Reddit from '@/assets/client/Reddit.svg';

const Client = () => {
  return (
    <section className="bg-[#F8F8FF]">
      <div className={`${styles['main-container']}`}>
        <div className="py-[80px] w-full text-gray-brand">
          <div className="text-center">
            <h1 className="font-extrabold text-[44px] ">
              Companies That Recruit Our Graduates
            </h1>
            <h2 className="text-black text-[26px] font-medium">
              Our graduates have worked in more than 400 companies around the
              World
            </h2>
          </div>
          <div className="mt-[80px]">
            <Marquee gradientColor={[248, 248, 255]}>
              <img
                src={Github}
                className="ml-7 lg:grayscale hover:grayscale-0"
                alt="github"
              />
              <img
                src={Microsoft}
                className="ml-7 lg:grayscale hover:grayscale-0"
                alt="microsoft"
              />
              <img
                src={Redis}
                className="ml-7 lg:grayscale hover:grayscale-0"
                alt="redis"
              />
              <img
                src={Amazon}
                className="ml-7 lg:grayscale hover:grayscale-0"
                alt="Amazon"
              />
              <img
                src={Github}
                className="ml-7 lg:grayscale hover:grayscale-0"
                alt="github"
              />
              <img
                src={Microsoft}
                className="ml-7 lg:grayscale hover:grayscale-0"
                alt="microsoft"
              />
              <img
                src={Redis}
                className="ml-7 lg:grayscale hover:grayscale-0"
                alt="redis"
              />
              <img
                src={Amazon}
                className="ml-7 lg:grayscale hover:grayscale-0"
                alt="Amazon"
              />
            </Marquee>
            <Marquee
              gradientColor={[248, 248, 255]}
              direction="right"
              className="mt-10"
            >
              <img
                src={Paypal}
                className="ml-7 lg:grayscale hover:grayscale-0"
                alt="Paypal"
              />
              <img
                src={Linkedin}
                className="ml-7 lg:grayscale hover:grayscale-0"
                alt="Linkedin"
              />
              <img
                src={Reddit}
                className="ml-7 lg:grayscale hover:grayscale-0"
                alt="Reddit"
              />
              <img
                src={Medium}
                className="ml-7 lg:grayscale hover:grayscale-0"
                alt="Medium"
              />
              <img
                src={Paypal}
                className="ml-7 lg:grayscale hover:grayscale-0"
                alt="Paypal"
              />
              <img
                src={Linkedin}
                className="ml-7 lg:grayscale hover:grayscale-0"
                alt="Linkedin"
              />
              <img
                src={Reddit}
                className="ml-7 lg:grayscale hover:grayscale-0"
                alt="Reddit"
              />
              <img
                src={Medium}
                className="ml-7 lg:grayscale hover:grayscale-0"
                alt="Medium"
              />
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Client;
