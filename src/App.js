import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Card from "./Components/Card";
import datas from "../src/data";

function App() {
  const cards = datas.map((data) => {
    return <Card key={data.id} {...data} />;
  });
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="cards-container ">{cards}</div>
    </div>
  );
}

export default App;
