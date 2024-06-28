import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavBar from "./components/MyNavBar";
import Gallery from "./components/Gallery";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <div className="text-white" style={{ backgroundColor: "#141414" }}>
      <MyNavBar />
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
