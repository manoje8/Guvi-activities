import Header from "./components/UI/header/Header";
import Footer from "./components/Footer";


function App({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default App;
