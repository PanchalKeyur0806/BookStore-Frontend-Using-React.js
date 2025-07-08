import Categories from "./components/Categories/Categories";
import FeaturedBooks from "./components/FeaturedBooks/FeaturedBooks";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import NewReleases from "./components/NewReleases/NewReleases";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <NewReleases />
      <FeaturedBooks />
      <Footer />
    </>
  );
}

export default App;
