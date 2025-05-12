import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css"; // para aplicar o estilo separado

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div>
        {/* SVG no topo */}
        <div className="sidebar-svg">
          <svg
            width="69"
            height="62"
            viewBox="0 0 69 62"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1 14.3333L12.4376 2.95262C13.6941 1.70238 15.3983 1 17.1752 1H51.8248C53.6017 1 55.3059 1.70238 56.5624 2.95262L68 14.3333M1 14.3333L34.5 61M1 14.3333L21.1 17.6667M34.5 61L68 14.3333M34.5 61L21.1 17.6667M34.5 61L47.9 17.6667M68 14.3333L47.9 17.6667M21.1 17.6667H47.9"
              stroke="white"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        {/* Informações da empresa */}
        <div className="company-info">
          <div>
            <strong style={{ fontSize: 16 }}>TechSolutions LTDA</strong>
          </div>
          <span>CNPJ: 95.279.038/0001-51</span>
        </div>
      </div>

      <h4>Conta</h4>

      {/* Links de navegação */}
      <nav className="nav-links">
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9.33337 2L12.6667 5.33333M9.33337 2V5.33333H12.6667M9.33337 2H5.33337C4.2288 2 3.33337 2.89543 3.33337 4L3.33337 12C3.33337 13.1046 4.2288 14 5.33337 14H10.6667C11.7713 14 12.6667 13.1046 12.6667 12V5.33333M6.00004 8.33333H10M6.00004 5.33333H6.66671M6.00004 11.3333H10"
              stroke="#00C5CB"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <NavLink to="/extrato" className="nav-link">
            Extrato
          </NavLink>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2 12.6667L7.33333 7.33337L8.66667 8.66671L14 3.33337M14 3.33337V6.34925M14 3.33337H10.8333"
              stroke="#00C5CB"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <NavLink to="/transferencias" className="nav-link">
            Transferências
          </NavLink>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1_41)">
              <path
                d="M9.85189 5.5309H7.07412C6.73032 5.5309 6.4006 5.66098 6.1575 5.8925C5.91439 6.12403 5.77782 6.43805 5.77782 6.76547C5.77782 7.0929 5.91439 7.40692 6.1575 7.63844C6.4006 7.86997 6.73032 8.00004 7.07412 8.00004H8.92597C9.26977 8.00004 9.59948 8.13011 9.84259 8.36164C10.0857 8.59316 10.2223 8.90718 10.2223 9.23461C10.2223 9.56204 10.0857 9.87605 9.84259 10.1076C9.59948 10.3391 9.26977 10.4692 8.92597 10.4692H5.77782M8.00004 4.29634V11.7037M4.33337 14.6667H11.6667C13.3236 14.6667 14.6667 13.3236 14.6667 11.6667V4.33337C14.6667 2.67652 13.3236 1.33337 11.6667 1.33337H4.33337C2.67652 1.33337 1.33337 2.67652 1.33337 4.33337V11.6667C1.33337 13.3236 2.67652 14.6667 4.33337 14.6667Z"
                stroke="#00C5CB"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_41">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <NavLink to="/pagamentos" className="nav-link">
            Pagamentos
          </NavLink>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1.33337 10.5714L4.66671 14M4.66671 14L8.00004 10.5714M4.66671 14L4.66671 4.66667M14.6667 5.42857L11.3334 2M11.3334 2L8.00004 5.42857M11.3334 2L11.3334 11.3333"
              stroke="#00C5CB"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <NavLink to="/cobranca" className="nav-link">
            Cobrança
          </NavLink>
        </div>
      </nav>
    </aside>
  );
};

export { Sidebar };
