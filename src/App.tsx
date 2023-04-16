import './index.css';
import {
  Hero,
  Navbar,
  Pricing,
  About,
  Client,
  Testimony,
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
    </>
  );
}

export default App;
