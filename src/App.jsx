import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavBar from "./components/MyNavBar";
import Gallery from "./components/Gallery";
import MyFooter from "./components/MyFooter";
import PageHeading from "./components/PageHeading";

function App() {
  return (
    <div className="text-white" style={{ backgroundColor: "#141414" }}>
      <MyNavBar />
      <PageHeading />
      <Gallery query="Godzilla" />
      <Gallery query="The Lord of The Rings" />
      <Gallery query="Scary Movie" />
      <Gallery query="Harry Potter" />
      <Gallery query="James Bond" />
      <MyFooter />
    </div>
  );
}

export default App;
