import { styles } from '@/css/styles';
import Testimony1 from '@/assets/testimoni-1.png';
import Testimony2 from '@/assets/testimoni-2.png';
import Testimony3 from '@/assets/testimoni-3.png';
import Testimony4 from '@/assets/testimoni-4.png';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const testimonialData = [
  {
    name: 'Rizki Ramadhan',
    jobTitle: 'Front End Developer',
    image: Testimony1,
    comment: `“The mentor is cool, how to convey each material is also detailed and easy to understand..”`,
  },
  {
    name: 'Jason Todd',
    jobTitle: 'Entrepreneur',
    image: Testimony2,
    comment: `“The mentor is cool, how to convey each material is also detailed and easy to understand..”`,
  },
  {
    name: 'Muhammad Ali',
    jobTitle: 'Boxer',
    image: Testimony3,
    comment: `“The mentor is cool, how to convey each material is also detailed and easy to understand..”`,
  },
  {
    name: 'Mike Erhmantraut',
    jobTitle: 'Security Manager',
    image: Testimony4,
    comment: `“You know what happened. The question is, can you live with it”`,
  },
];
const responsive = {
  lgDeskop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  desktop: {
    breakpoint: { max: 1200, min: 800 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 769, min: 640 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Testimony = () => {
  return (
    <section className="bg-white" id="testimonial">
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
          <Carousel
            responsive={responsive}
            infinite={true}
            className="py-10 items-center mt-[80px]"
          >
            {testimonialData.map((item, key) => (
              <div
                className="border-2 border-purple-brand rounded-[10px] h-[300px] w-[240px] pt-10 relative m-auto"
                key={key}
              >
                <img
                  src={item.image}
                  alt="testimoni-1"
                  className="child-testi border-2 border-purple-brand rounded-full"
                />
                <div className="text-center mt-7">
                  <h1 className="text-[22px] font-bold text-gray-brand">
                    {item.name}
                  </h1>
                  <h3 className="text-[#BAB8D2] text-[15px] ">
                    {item.jobTitle}
                  </h3>
                  <p className="text-[17px] mt-[30px]">{item.comment}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimony;
