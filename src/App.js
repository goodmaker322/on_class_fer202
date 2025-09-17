import Gallery, { Profile1, Profile2 } from "./components/Gallery";
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return ( <
        div className = "App" >
        <
        Header / >
        <
        Gallery / >
        <
        hr / >
        <
        Profile1 / >
        <
        hr / >
        <
        Profile2 / >
        <
        /div>
    );
}

export default App;