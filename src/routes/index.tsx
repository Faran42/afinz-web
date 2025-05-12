import Home from "../views/Home/Home";
import { Routes, Route } from "react-router-dom";
import { TransferTab } from "../views/Home/TransferTab";
import { AccountBalanceTab } from "../views/Home/AccountBalanceTab";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="saldo" element={<AccountBalanceTab />} />
        <Route path="transferir" element={<TransferTab />} />
        <Route index element={<AccountBalanceTab />} /> {/* Default route */}
      </Route>
    </Routes>
  );
}
