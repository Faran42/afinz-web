import { TabLink } from "../TabLink";
export function Header() {
  return (
    <div
      style={{
        background: "#fff",
        padding: "16px 24px",
        borderBottom: "1px solid #ccc",
      }}>
      <nav>
        {/* <a
          href="#"
          style={{
            marginRight: 16,
            textDecoration: "underline",
            color: "#00bcd4",
          }}>
          Saldo
        </a>
        <a href="#" style={{ color: "#000" }}>
          Transferir
        </a> */}
        <TabLink to="saldo">Saldo</TabLink>
        <TabLink to="transferir">Transferir</TabLink>
      </nav>
    </div>
  );
}
