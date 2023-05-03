import {
  Blog,
  Features,
  Footer,
  Header,
  Possibility,
  WhatGPT3,
} from "./containers";
import { Article, Brand, Cta, Feature, Navbar } from "./components";
import "./App.css";

function App() {
  return (
    <>
      <section className="App">
        <section className="gradient__bg">
          <Navbar />
          <Header />
        </section>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <Cta />
        <Blog />
        <Footer />
      </section>
    </>
  );
}

export default App;
