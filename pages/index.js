import { useState, useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';
import Navbar from '../components/Navbar';
import HomeSection from '../components/HomeSection';
import BioSection from '../components/BioSection';
import DemoSection from '../components/DemoSection';
import ListenSection from '../components/ListenSection';
import ProjectSection from '../components/ProjectSection';
import Footer from '../components/Footer';
//import NewsSection from '../components/NewsSection';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <I18nextProvider i18n={i18n}>
      <div>
        <Navbar />
        <main>
          <HomeSection />
          <DemoSection />
          <ListenSection />
          <ProjectSection />
          <BioSection />
          <Footer />
        </main>
      </div>
    </I18nextProvider>
  );
}