import { styles } from '@/css/styles';
import Logo from '@/assets/logo.svg';
import Mail from '@/assets/mail.svg';
import Telephone from '@/assets/telphone.svg';

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className={`${styles['main-container']}`}>
        <div className="py-[80px] grid md:grid-cols-footer grid-cols-1 gap-x-20 gap-y-10">
          <div className="flex flex-col items-start justify-between">
            <img src={Logo} alt="Logo" className="h-12" />
            <p className="mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
            <span className="hidden sm:block font-bold">
              &#169; rizkiramadhanx | codedesign.dev
            </span>
          </div>
          <div className="grid-cols-3 grid">
            <nav>
              <h2 className="text-gray-brand font-bold text-lg">Company</h2>
              <div className="flex flex-col gap-y-2 mt-2">
                <a>Home</a>
                <a>Blogs</a>
                <a>Careers</a>
                <a>Portfolio</a>
              </div>
            </nav>
            <nav>
              <h2 className="text-gray-brand font-bold text-lg">Links</h2>
              <div className="flex flex-col gap-y-2 mt-2 text-gray-brand-2">
                <a>Privacy</a>
                <a>Github</a>
                <a>Supports</a>
                <a>FAQS</a>
              </div>
            </nav>
            <nav>
              <h2 className="text-gray-brand font-bold text-lg">Company</h2>
              <div className="flex flex-col gap-y-2 mt-2 text-gray-brand-2">
                <span>
                  <img src={Telephone} className="inline h-4" />
                  <span className="ml-1 text-purple-brand">(021) 31048184</span>
                </span>
                <span>
                  <img src={Mail} className="inline h-4" />
                  <span className="ml-1 text-purple-brand whitespace-nowrap">
                    rizki@suxz.com
                  </span>
                </span>
                <p>
                  Jl. Narogong. Perum Cileungsi Elok Blok A No.5. Jakarta
                  Selatan. 12240.
                </p>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
