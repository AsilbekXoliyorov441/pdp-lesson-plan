import { useNavigate } from "react-router-dom";
import { LogOut, Sparkles } from "lucide-react";
import { logout } from "../utils/auth";

export default function Navbar() {
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 shadow-lg shadow-cyan-500/20">
            <Sparkles className="text-white" size={22} />
          </div>

          <div>
            <h1 className="text-lg font-bold text-white">PDP Junior</h1>
            <p className="text-xs text-slate-400">Frontend Lesson Planner</p>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10"
        >
          <LogOut size={17} />
          Chiqish
        </button>
      </div>
    </header>
  );
}
