import { useEffect, useState } from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  /**
   * Scroll Progress
   * @see https://kimia-ui.vercel.app/components/scroll-indicators
   */
  const [scroll, setScroll] = useState(0);

  const onScrollProgress = () => {
    const html = document.documentElement;
    const scrollPx = html.scrollTop;
    const winHeightPx = html.scrollHeight - html.clientHeight;
    const scrolled = (scrollPx / winHeightPx) * 100;

    setScroll(scrolled);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScrollProgress);

    return () => {
      window.removeEventListener('scroll', onScrollProgress);
    };
  }, []);

  const inlineStyle = {
    height: '4px',
    background: '#4C1D95',
    width: `${scroll}%`,
  };

  return (
    <>
      <div className="top-0 left-0 w-screen fixed z-40 shadow-2xl bg-gray-300 z-[51]">
        <div style={inlineStyle} />
      </div>
      {children}
    </>
  );
};

export default Layout;
