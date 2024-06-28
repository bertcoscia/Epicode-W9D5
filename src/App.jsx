import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavBar from "./components/MyNavBar";
import Gallery from "./components/Gallery";
import MyFooter from "./components/MyFooter";
import PageHeading from "./components/PageHeading";
import AccountNav from "./components/AccountNav";
import SearchMovie from "./components/SearchMovie";

function App() {
  return (
    <div className="text-white" style={{ backgroundColor: "#141414" }}>
      <MyNavBar />
      <PageHeading />
      <SearchMovie />
      {/* <Gallery query="The Lord of The Rings" />
      <Gallery query="Star Wars" />
      <Gallery query="Harry Potter" />
      <Gallery query="Godzilla" />
      <Gallery query="Scary Movie" /> */}
      {/*   <AccountNav /> */}
      <MyFooter />
    </div>
  );
}

export default App;
