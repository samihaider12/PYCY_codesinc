
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import AboutMission from "./pages/AboutMission";  
import Programs from "./pages/Programs";
import SupportStory from "./pages/SupportStory";
import Footer from "./components/Footer";
import PageLoader from "./components/PageLoader";

function App() {
  return (
    <>
      <PageLoader />
      <Navbar />
      <main>
        <Hero />
        <AboutMission />
        <Programs/>
        <SupportStory />  
        {/* Naye sections yahan import karke niche add karte jayein */}
      </main>
    <Footer/>
    </>
  );
}

export default App;