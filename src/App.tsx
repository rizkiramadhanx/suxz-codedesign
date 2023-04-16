import './index.css';
import {
  Hero,
  Navbar,
  Pricing,
  About,
  Client,
  Testimony,
  Footer,
  Contact,
} from '@/components/section';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Pricing />
      <About />
      <Client />
      <Testimony />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
