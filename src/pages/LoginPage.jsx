import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Lock, User, Sparkles } from "lucide-react";
import { login } from "../utils/auth";

export default function LoginPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const success = login(form.username, form.password);

    if (!success) {
      setError("Login yoki parol noto‘g‘ri");
      return;
    }

    navigate("/");
  }

  return (
    <main className="flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-5">
      <div className="absolute left-10 top-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        className="relative w-full max-w-md rounded-[32px] border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-2xl"
      >
        <div className="mb-8 text-center">
          <div className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-3xl bg-gradient-to-br from-cyan-400 to-blue-600 shadow-lg shadow-cyan-400/20">
            <Sparkles className="text-white" size={30} />
          </div>

          <h1 className="text-3xl font-black text-white">PDP Junior</h1>
          <p className="mt-2 text-sm text-slate-400">
            Frontend dars reja platformasi
          </p>
        </div>

        <label className="mb-4 block">
          <span className="mb-2 block text-sm text-slate-300">Login</span>
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/60 px-4">
            <User size={18} className="text-slate-400" />
            <input
              value={form.username}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
              className="w-full bg-transparent py-4 text-white outline-none"
              placeholder="asilbek"
            />
          </div>
        </label>

        <label className="mb-5 block">
          <span className="mb-2 block text-sm text-slate-300">Parol</span>
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/60 px-4">
            <Lock size={18} className="text-slate-400" />
            <input
              type="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="w-full bg-transparent py-4 text-white outline-none"
              placeholder="937550412"
            />
          </div>
        </label>

        {error && (
          <p className="mb-4 rounded-xl bg-red-500/10 px-4 py-3 text-sm text-red-300">
            {error}
          </p>
        )}

        <button className="w-full rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 py-4 font-black text-slate-950 transition hover:scale-[1.02]">
          Kirish
        </button>
      </motion.form>
    </main>
  );
}
