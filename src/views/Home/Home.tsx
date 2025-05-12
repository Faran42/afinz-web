import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";

import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ display: "flex", height: "100vh", width: "100vw" }}>
      <Sidebar />
      <div style={{ flex: 1, background: "#eee" }}>
        <Header />
        <div style={{ padding: 24, flex: 1 }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
