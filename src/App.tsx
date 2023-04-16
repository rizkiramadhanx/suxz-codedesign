import './index.css';
import {
  Hero,
  Navbar,
  Pricing,
  About,
  Client,
  Testimony,
  Footer,
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
      <Footer />
    </>
  );
}

export default App;
