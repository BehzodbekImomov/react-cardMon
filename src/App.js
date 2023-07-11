import { BrowserRouter, Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/Login";
import DebtsP from "./pages/DebtsP";
import TransactionsP from "./pages/Transactions";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route path="debts" element={<DebtsP />} />
          <Route path="transactions" element={<TransactionsP />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
