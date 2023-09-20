import css from "./styles/App.module.scss"
import Header from "@/src/components/Header/Header";
import Hero from "@/src/components/Hero/Hero";
import Experties from "@/src/components/Experties/Experties";
import Work from "@/src/components/Work/Work";
import Portfolio from "@/src/components/Portfolio/Portfolio";
import People from "@/src/components/People/People";
import Footer from "@/src/components/Footer/Footer";
export default function Home() {

  return (
    <div className={`bg-primary ${css.container}`}>
      <Header/>
      <Hero/>
      <Experties/>
      <Work/>
      <Portfolio/>
      <People/>
      <Footer/>
    </div>
  );
}
