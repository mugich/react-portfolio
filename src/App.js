import Navbar from "./components/Navbar/navbar";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header/header";
import Portfolio from "./pages/Portfolio";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Wrapper>
        <Portfolio/>
      </Wrapper>
        
    </div>
  );
}

export default App;
