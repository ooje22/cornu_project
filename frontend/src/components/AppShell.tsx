import { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { CURRENT_PERIOD, TAXONOMY_VERSION } from "../data/mock";
import { formatPeriod } from "../lib/format";

const links = [
  { to: "/", label: "대시보드", end: true },
  { to: "/files", label: "파일", end: false },
  { to: "/categories", label: "카테고리", end: false },
  { to: "/reviews", label: "검토", end: false },
  { to: "/issues", label: "이슈", end: false },
  { to: "/complaints", label: "민원", end: false },
];

export function AppShell() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <div className="shell">
      <a className="skip-link" href="#main">
        본문으로 이동
      </a>
      <header className={open ? "top-nav is-open" : "top-nav"}>
        <div className="top-nav-bar">
          <NavLink to="/" className="brand" end>
            <span className="wordmark">DATALENS</span>
            <span className="wordmark-sub">민원</span>
          </NavLink>
          <nav id="primary-nav" className="nav-links" aria-label="주요 메뉴">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={({ isActive }) => `nav-link${isActive ? " is-active" : ""}`}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="nav-tools">
            <span className="nav-meta">샘플 데이터</span>
            <span className="version-chip num">v{TAXONOMY_VERSION}</span>
            <button
              type="button"
              className="btn btn-secondary nav-toggle"
              aria-expanded={open}
              aria-controls="primary-nav"
              onClick={() => setOpen((value) => !value)}
            >
              메뉴
            </button>
          </div>
        </div>
      </header>
      <main id="main" className="shell-main">
        <Outlet />
      </main>
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-grid">
            <div>
              <p className="footer-title">화면</p>
              <p>
                <NavLink to="/" end>대시보드</NavLink>
              </p>
              <p>
                <NavLink to="/files">파일</NavLink>
              </p>
              <p>
                <NavLink to="/complaints">민원</NavLink>
              </p>
              <p>
                <NavLink to="/issues">이슈</NavLink>
              </p>
            </div>
            <div>
              <p className="footer-title">체계</p>
              <p>
                <NavLink to="/categories">카테고리</NavLink>
              </p>
              <p>
                <NavLink to="/categories/candidates">신규 후보</NavLink>
              </p>
              <p>
                <NavLink to="/reviews">검토</NavLink>
              </p>
            </div>
            <div>
              <p className="footer-title">이번 집계</p>
              <p>{formatPeriod(CURRENT_PERIOD)}</p>
              <p>체계 v{TAXONOMY_VERSION}</p>
              <p>샘플 데이터</p>
            </div>
          </div>
          <p className="footer-bottom">DataLens 민원 분석</p>
        </div>
      </footer>
    </div>
  );
}
