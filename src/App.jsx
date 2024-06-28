import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavBar from "./components/MyNavBar";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div data-bs-theme="dark">
      <MyNavBar />
      <Gallery query="The Lord of The Rings" />
    </div>
  );
}

export default App;
