import { NavLink, Navigate, Route, Routes } from 'react-router-dom';
import { MODULES } from './modules';
import Home from './pages/Home';
import ModulePage from './pages/ModulePage';

const GROUPS = Array.from(new Set(MODULES.map((m) => m.group)));

export default function App() {
  return (
    <div className="shell">
      <aside className="sidebar">
        <div className="brand">
          <span className="brand-name">Kebun Binatang</span>
          <span className="brand-sub">Panel pengelola</span>
        </div>
        <nav aria-label="Menu utama">
          <div className="nav-group">
            <NavLink to="/" end className="nav-link">
              Beranda
            </NavLink>
          </div>
          {GROUPS.map((group) => (
            <div key={group} className="nav-group">
              <p className="nav-heading">{group}</p>
              {MODULES.filter((m) => m.group === group).map((m) => (
                <NavLink key={m.path} to={m.path} className="nav-link">
                  {m.label}
                </NavLink>
              ))}
            </div>
          ))}
        </nav>
      </aside>

      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          {MODULES.map((m) => (
            <Route key={m.path} path={m.path} element={<ModulePage module={m} />} />
          ))}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}
