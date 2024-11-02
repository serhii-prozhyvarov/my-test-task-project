import Benefits from "components/Benefits/Benefits";
import HeroSection from "../../components/Hero/Hero";
import Work from "components/Work/Work";
import Team from "components/Team/Team";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Benefits />
      <Work />
      <Team/>
    </div>
  );
};

export default Home