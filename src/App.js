import Body from "./components/Body";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="bg-light-bg">
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
  );
}

export default App;
