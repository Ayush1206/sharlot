
import Hero from "./components/hero";
import About from "./components/about";
import VideoSamples from "./components/samples";
import UpcomingEvents from "./components/events";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div >
     <Hero />
     <About />
     <VideoSamples />
     <UpcomingEvents />
     <Footer />
    </div>
  );
}
