import Layout from './components/molecules/Layout';
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
    <Layout>
      <Navbar />
      <Hero />
      <Pricing />
      <About />
      <Client />
      <Testimony />
      <Contact />
      <Footer />
    </Layout>
  );
}

export default App;
