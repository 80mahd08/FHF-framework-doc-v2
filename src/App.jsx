import Header from "./component/Header/Header";
import SearchPart from "./component/SearchPart/SearchPart";
import ContPart from "./component/ContPart/ContPart";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <>
      <Header
        shown={false}
        setShowNav={function () {
          throw new Error("Function not implemented.");
        }}
        showNav={0}
      />
      <SearchPart />
      <ContPart />
      <Footer />
    </>
  );
}

export default App;
