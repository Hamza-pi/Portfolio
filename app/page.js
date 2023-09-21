import css from "./styles/App.module.scss";
import Header from "@/src/components/Header/Header";
import Hero from "@/src/components/Hero/Hero";
import Experties from "@/src/components/Experties/Experties";
import Work from "@/src/components/Work/Work";
import Portfolio from "@/src/components/Portfolio/Portfolio";
import People from "@/src/components/People/People";
import Footer from "@/src/components/Footer/Footer";
import Blur from "@/src/components/Blurs/Blur";
export default function Home() {
  return (
    <div className={`bg-primary ${css.container}`}>
      <div className={css.heroBlur1}>
        <Blur />
      </div>
      <div className={css.heroBlur2}>
        <Blur />
      </div>
      <Header />
      <Hero />

      <div style={{ position: "relative" }}>
        <div className={css.expBlur1}>
          <Blur
            background="rgba(85, 185, 64, 0.85)"
            width="40rem"
            height="25rem"
            blur="200px"
          />
        </div>
        <div className={css.expBlur2}>
          <Blur height="25rem" blur="120px" />
        </div>
        <Experties />
      </div>
      <Work />
      <div style={{ position: "relative" }}>
        <div className={css.portBlur2}>
          <Blur background="rgba(85, 185, 64, 0.55)" blur="110px"/>
        </div>
        <div className={css.portBlur1}>
          <Blur  height="25rem" blur="120px"/>
        </div>
        <Portfolio />
      </div>
      <People />
      <div style={{ position: "relative" }}>
        <div className={css.portBlur2}>
          <Blur background="rgba(85, 185, 64, 0.25)" height="25rem"/>
        </div>
        <Footer />
      </div>
    </div>
  );
}
