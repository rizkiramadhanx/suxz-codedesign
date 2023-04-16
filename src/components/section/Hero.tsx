import { styles } from '@/css/styles';
import HeroImage from '@/assets/Hero.png';

const Hero = () => {
  return (
    <section className="bg-white">
      <div className={`${styles['main-container']}`}>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5  lg:h-[calc(100vh_-_100px)]">
          <div className="order-2 lg:order-1 py-5">
            <div>
              <h2 className="text-purple-brand text-xl font-bold">
                SUXZ MAKE IT EASY
              </h2>
              <h1 className="md:text-[64px] text-4xl font-extrabold md:leading-[87px] text-gray-brand mt-1">
                Find Your Way Of Success
              </h1>
              <p className="mt-[15px]  text-gray-brand-2 md:text-2xl font-medium">
                We help you to increase self-confidence and train yourself in a
                direction, and make you more creative in developing a work
              </p>
            </div>
            <div className="md:mt-10 mt-5 flex lg:justify-between gap-x-3">
              <button className="sm:text-[23px] text-[#FFFFFF] sm:w-[250px] w-[150px] py-2 sm:py-4 bg-purple-brand rounded-xl hover:scale-105 transition-all hover:text-slate-600">
                Get Started
              </button>
              <button className="sm:text-[23px] text-[#A2B3BF] sm:w-[250px] w-[150px] py-2 sm:py-4 bg-[#F8F8FF] rounded-xl hover:scale-105 transition-all hover:text-slate-600">
                Our Services
              </button>
            </div>
          </div>
          <div className="flex justify-center order-1 items-center">
            <img
              src={HeroImage}
              alt="Hero"
              className="max-h-[450px] aspect-square"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
