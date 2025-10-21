import Gallery, { Profile1, Profile2 } from "./components/Gallery";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Tabs from "./components/Tabs";
import Movies from "./components/Movies";
import BookList from "./components/BookList";
import CounterDemo from "./components/CounterDemo";
import { Form } from "react-bootstrap";
import FormDemo from "./components/FormDemo";
import Box from "./components/Box";
import Hello from "./components/Hello";
import Avatar from "./components/Avatar";
<<<<<<< HEAD
=======
import BookList2 from "./components/BookList2";
import StudentManagement from "./components/StudentManagerment";
import ProjectList from "./components/ProjectList";
import EffectDemo from "./components/EffectDemo";
import EffectDemo1 from "./components/EffectDemo1";
import EffectDemo2 from "./components/EffectDemo2";
import RefDemo from "./components/RefDemo";
import Counter1 from "./components/Counter1";
import RefDomExample from "./components/RefDomExample";
import ExCountDown from "./components/ExCountDown";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderMoviePE from "./components/HeaderMoviePE";
import MoviePE from "./components/MoviePE";
>>>>>>> 2f7710f640d085dd945814207a86e36583a3abe0

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Header />
      {/* <Gallery />
=======
      {/* On Class FER 202  */}
      {/* <Header />
      <Gallery />
>>>>>>> 2f7710f640d085dd945814207a86e36583a3abe0
      <hr />
      <Profile1 />
      <hr />
      <Profile2 />
      <hr />
      <Tabs />
      <hr />
<<<<<<< HEAD
      <Movies /> */}
=======
      <Movies />
>>>>>>> 2f7710f640d085dd945814207a86e36583a3abe0
      <hr />
      <BookList />

      <hr />
      <CounterDemo/> 

      <hr/>
      <FormDemo/>

      <hr/>
      <Box boxColor='red' width ='150px' height='150px'/>
      <Box boxColor='blue' width ='100px' height='100px'/> 

<<<<<<< HEAD
      <hr/>
      <Hello who='Tam Anh'/>
      <Hello who='Tam Anh' age={22}/>

      <hr/>
      <Avatar/>
=======
      <hr />
      <Hello who="Tam Anh" />
      <Hello who="Tam Anh" age={22} />

      <hr />
      <Avatar />
      <hr />
      <BookList2 />

       <StudentManagement />

      <ProjectList /> 

      <EffectDemo /> 
      <EffectDemo1 />

      <EffectDemo2 />

      <RefDemo />

      <Counter1 />
      <RefDomExample />

      <ExCountDown /> */}

      {/* PE MovieList  */}

      <div className="App">
        <HeaderMoviePE />
        <main>
          <Routes>
            <Route path="/" element={<div>Dashboard Home</div>} />
            <Route path="/director" element={<div>Directors Component</div>} />
            <Route path="/producer" element={<div>Producers Component</div>} />
            <Route path="/star" element={<div>Stars Component</div>} />
            <Route path="/genre" element={<div>Genres Component</div>} />
            <Route path="/movie" element={<MoviePE />} />
          </Routes>
        </main>
      </div>
>>>>>>> 2f7710f640d085dd945814207a86e36583a3abe0
    </div>
  );
}

export default App;
