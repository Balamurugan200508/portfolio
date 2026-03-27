import ScrollyCanvas from '@/components/ScrollyCanvas';
import Overlay from '@/components/Overlay';
import TechStack from '@/components/TechStack';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen text-white selection:bg-amber-400 selection:text-black">
      <ScrollyCanvas>
        <Overlay />
      </ScrollyCanvas>
      <TechStack />
      <Projects />
      <Contact />
    </main>
  );
}
