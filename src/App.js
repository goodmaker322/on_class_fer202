import CardItem from "./components/CardItem";
import Gallery, { Profile1, Profile2 } from "./components/Gallery";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import UserList from "./components/UserList";

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
      <CardItem />
      <hr />
      <UserList />
    </div>
  );
}

export default App;
