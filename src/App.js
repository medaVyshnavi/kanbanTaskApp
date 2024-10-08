import React, { useState } from "react";
import Body from "./components/Body";
import Header from "./components/Header";
import MobileHeader from "./components/MobileHeader";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

function App() {

  const [isMenuOpen,setIsMenuOpen] = useState(false)
  return (
    <>
      <header>
        <div className="hidden md:block">
          <Header />
        </div>
        <div className="block md:hidden">
          <MobileHeader open={isMenuOpen} setOpen={setIsMenuOpen} />
        </div>
      </header>
      <nav>
        <div className="hidden md:block">
          <Sidebar />
        </div>
        <div>
          <Navbar openMenu={isMenuOpen} setOpenMenu={setIsMenuOpen} />
        </div>
      </nav>
      <body>
        <Body />
      </body>
    </>
  );
}

export default App;
