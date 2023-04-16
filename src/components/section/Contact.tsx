import { styles } from '@/css/styles';
import React from 'react';

const Contact = () => {
  return (
    <section className="bg-white">
      <div
        className={`${styles['main-container']} object-contain bg-no-repeat`}
        style={{
          backgroundImage: `url('src/assets/contact-background.png')`,
        }}
      >
        <div className="py-[80px] text-center items-center flex flex-col justify-end gap-y-6">
          <div>
            <h1 className="md:text-[44px] text-3xl  font-extrabold">
              So? What Are You Waiting For
            </h1>
            <p className="md:text-[24px] text-2xl font-medium mt-4">
              It's time to build your career, study in a relaxed and purposeful
              manner
            </p>
          </div>
          <div className="flex gap-x-5 mt-2 text-white text-[20px]">
            <button className="py-2 bg-purple-brand rounded-[10px] h-fit px-2">
              Get Started
            </button>
            <button className="py-2 bg-gray-brand rounded-[10px] h-fit px-2">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
