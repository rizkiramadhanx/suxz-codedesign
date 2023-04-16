import { styles } from '@/css/styles';
import React from 'react';
import AboutImage from '@/assets/about.png';
import listAbout from '@/assets/list-about.svg';

const About = () => {
  return (
    <section className="bg-white">
      <div className={`${styles['main-container']}`}>
        <div className="py-[80px] grid grid-cols-1 lg:grid-cols-2 gap-x-[150px]">
          <img src={AboutImage} alt="About" className="self-center" />
          <div>
            <h2 className="text-xl font-semibold text-purple-brand">
              ABOUT US
            </h2>
            <h1 className="font-extrabold sm:text-[44px] text-4xl sm:leading-[60px]  text-gray-brand mt-[5px]">
              We Help Improve Your Work Experience
            </h1>
            <p className="text-gray-brand sm:text-[22px] text-lg font-medium mt-5">
              We help you to increase self-confidence and train yourself in a
              direction.
            </p>
            <ul className="sm:mt-[50px] mt-6 flex flex-col gap-y-4 sm:gap-y-[30px] text-xl font-semibold">
              <li className="flex items-center">
                <img src={listAbout} alt="cuak" className="h-[50px]" />
                <span className="ml-2 lg:ml-5">
                  Study and produce creation to get a job
                </span>
              </li>
              <li className="flex items-center">
                <img src={listAbout} alt="cuak" className="h-[50px]" />
                <span className="ml-2 lg:ml-5">
                  Study and produce creation to get a job
                </span>
              </li>
              <li className="flex items-cente">
                <img src={listAbout} alt="cuak" className="h-[50px]" />
                <span className="ml-2 lg:ml-5">
                  Study and produce creation to get a job
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
