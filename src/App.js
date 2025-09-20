import Gallery, { Profile1, Profile2 } from "./components/Gallery";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Tabs from "./components/Tabs";
import Movies from "./components/Movies";
import BookList from "./components/BookList";

function App() {
  return (
    <div className="App">
      <Header />
      <Gallery />
      <hr />
      <Profile1 />
      <hr />
      <Profile2 />
      <hr />
      <Tabs />
      <hr />
      <Movies />
      <hr />
      <BookList />
    </div>
  );
}

export default App;
