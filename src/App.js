import Body from "./components/Body";
import Header from "./components/Header";
import MobileHeader from "./components/MobileHeader";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <header>
        <div className="hidden md:block">
          <Header />
        </div>
        <div className="block md:hidden">
          <MobileHeader />
        </div>
      </header>
      <nav>
        <Sidebar />
      </nav>
      <body>
        <div>
          <Body />
        </div>
      </body>
    </>
  );
}

export default App;
