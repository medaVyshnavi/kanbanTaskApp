import Body from "./components/Body";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { useSelector } from "react-redux";

function App() {
  const darkMode = useSelector((state) => state.app.darkMode);
  return (
    <>
      <div>
        <header>
          <Header />
        </header>
        <nav>
          <Navbar />
        </nav>
        <body>
          <Body />
        </body>
      </div>
    </>
  );
}

export default App;
