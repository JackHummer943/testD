import Header from './component/header/Header';
import Promo from './component/promo/Promo';
import Brands from './component/brands/Brands';
import Arrivals from './component/arrivals/Arrivals';
function App() {
  return (
    <div className="App">
      <Header />
      {/* <Promo /> */}
      <Brands />
      <Arrivals />
    </div>
  );
}

export default App;
