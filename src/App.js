import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AllData from "./pages/alldata";
import CreateAccount from "./pages/create-account";
import Deposit from "./pages/deposit";
import Home from './pages/home';
import Withdraw from "./pages/withdraw";
import { BalanceProvider } from './components/utils/useBalance';

function App() {
  return (
    <BalanceProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/create-account" element={<CreateAccount />} />
            <Route path="/data" element={<AllData />} />
            <Route path="/deposit" element={<Deposit />} />
            <Route path="/withdraw" element={<Withdraw />} />
          </Routes>
        </BrowserRouter>
      </div>
    </BalanceProvider>
  );
}

export default App;
