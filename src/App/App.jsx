import Footer from "components/Footer/Footer";
import MainContent from "components/MainContent/MainContent";
import Navbar from "components/Navbar/Navbar";
import { AppWrapper } from "./App.styled";

const App = () => {
  return (
    <AppWrapper>
      <Navbar />
      <MainContent />
      <Footer/>
    </AppWrapper>
  );
};

export default App
