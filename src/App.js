import "./App.css";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Image from "./components/Image";
import ImgText from "./components/ImgText";
import Card from "./components/Card";
import Banner from "./components/Banner";
import Text from "./components/Text";
import Footer from "./components/Footer";
import Contents from "./components/Contents";

function App() {
  return (
    <>
      <Header fonts="nexon" />
      <Contents>
        <Slider fonts="nexon" />
        <Image skill={["section", "nexon"]} />
        <ImgText skill={["section", "nexon"]} />
        <Card skill={["section", "nexon"]} />
        <Banner skill={["section", "nexon"]} />
        <Text skill={["section", "nexon"]} />
      </Contents>
      <Footer />
    </>
  );
}

export default App;
