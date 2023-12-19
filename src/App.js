import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <nav className="min-h-[1024px] bg-yellow-300 w-[300px]">
        <Navbar />
      </nav>
      <body></body>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
