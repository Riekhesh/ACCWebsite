import Navbar from './Navbar';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setIsAnimating(true);
      setAnimationClass('page-transition-out');
    };

    const handleRouteChangeComplete = () => {
      // The 'out' animation is 300ms. We set 'in' after a short delay.
      // Then we remove the animation class so it can be re-applied.
      setTimeout(() => {
        setAnimationClass('page-transition-in');
        setTimeout(() => {
          setIsAnimating(false);
          setAnimationClass('');
        }, 300); // Duration of the 'in' animation (matches CSS)
      }, 50); // Small delay to ensure 'out' completes visually
    };

    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);
    router.events.on('routeChangeError', handleRouteChangeComplete); // Also handle errors

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
      router.events.off('routeChangeError', handleRouteChangeComplete);
    };
  }, [router.events]);

  return (
    <>
      <Navbar />
      <main className={isAnimating ? animationClass : 'page-transition-in'}>
        {children}
      </main>
    </>
  );
};

export default Layout; 