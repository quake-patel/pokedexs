import { Provider } from "react-redux";
import Pokemon from "./Pokemon";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Store } from "./Store";
import Detail from "./component/Detail";
import GenerationList from "./GenerationList";

const App = () => {
  return (
    <Provider store={Store}>
      <Router basename='/pokedexs'>
        <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/pokemon' element={<Pokemon />} />
            <Route path='/generation/:id' element={<GenerationList />} />
            <Route path='/pokemon/:name' element={<Detail />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};
export default App;
