import axios from "axios";
import "./App.css";
import MoiveDeatils from "./components/MoiveDetails";

axios.defaults.baseURL = "http://localhost:3000";

function App() {
  // const url = "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg%22%7D,%7B%22Title%22:%22Batman%20Beyond:%20Return%20of%20the%20Joker%22,%22Year%22:%222000%22,%22imdbID%22:%22tt0233298%22,%22Type%22:%22movie%22,%22Poster%22:%22https://m.media-amazon.com/images/M/MV5BNmRmODEwNzctYzU1MS00ZDQ1LWI2NWMtZWFkNTQwNDg1ZDFiXkEyXkFqcGdeQXVyNTI4MjkwNjA@._V1_SX300.jpg"
  return (
    <>
    {/* <img src={url} alt="" /> */}
      <MoiveDeatils />
    </>
  );
}

export default App;
