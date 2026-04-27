import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { login } from "../utils/auth";

const CODE_ICON = (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <path
      d="M8 10L3 14L8 18"
      stroke="#f59e0b"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20 10L25 14L20 18"
      stroke="#f59e0b"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 6L12 22"
      stroke="#fbbf24"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export default function LoginPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [focusedField, setFocusedField] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    await new Promise((r) => setTimeout(r, 700));

    const success = login(form.username, form.password);

    if (!success) {
      setLoading(false);
      setError("Login yoki parol noto'g'ri");
      return;
    }

    navigate("/");
  }

  return (
    <main
      style={{
        minHeight: "100svh",
        background: "#080a0f",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        position: "relative",
        overflow: "hidden",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&family=Cormorant+Garamond:wght@400;600&display=swap');

        .lux-input::placeholder { color: #3a3f4a; }
        .lux-input:focus { outline: none; }
        .lux-input { caret-color: #f59e0b; }

        @keyframes grain {
          0%, 100% { transform: translate(0, 0); }
          10% { transform: translate(-2%, -3%); }
          20% { transform: translate(3%, 2%); }
          30% { transform: translate(-1%, 4%); }
          40% { transform: translate(4%, -1%); }
          50% { transform: translate(-3%, 2%); }
          60% { transform: translate(2%, -4%); }
          70% { transform: translate(-4%, 1%); }
          80% { transform: translate(1%, 3%); }
          90% { transform: translate(3%, -2%); }
        }

        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        .shimmer-btn {
          background: linear-gradient(
            105deg,
            #b45309 0%,
            #f59e0b 40%,
            #fde68a 50%,
            #f59e0b 60%,
            #b45309 100%
          );
          background-size: 200% auto;
          animation: shimmer 3s linear infinite;
        }

        .shimmer-btn:hover { animation-duration: 1.5s; }
      `}</style>

      {/* Noise grain overlay */}
      <div
        style={{
          position: "fixed",
          inset: "-50%",
          width: "200%",
          height: "200%",
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          opacity: 0.035,
          animation: "grain 8s steps(1) infinite",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* Ambient glow orbs */}
      <div
        style={{
          position: "absolute",
          top: "-10%",
          left: "20%",
          width: 500,
          height: 500,
          background:
            "radial-gradient(circle, rgba(245,158,11,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-10%",
          right: "15%",
          width: 400,
          height: 400,
          background:
            "radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Diagonal line decoration */}
      <svg
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          opacity: 0.04,
        }}
      >
        <line
          x1="0"
          y1="100%"
          x2="100%"
          y2="0"
          stroke="#f59e0b"
          strokeWidth="0.5"
        />
        <line
          x1="-10%"
          y1="110%"
          x2="110%"
          y2="-10%"
          stroke="#f59e0b"
          strokeWidth="0.5"
        />
      </svg>

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{
          width: "100%",
          maxWidth: 420,
          position: "relative",
          zIndex: 10,
        }}
      >
        {/* Brand mark */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 40 }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 20,
              
            }}
          >
            <img className="h-10" src="/logo.svg" alt="" />
          </div>

          
          <div
            style={{
              fontSize: 12,
              color: "#4a5060",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              fontWeight: 400,
            }}
          >
            Frontend Platform
          </div>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{
            background:
              "linear-gradient(160deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.02) 100%)",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: 28,
            padding: "36px 32px",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            boxShadow:
              "0 40px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.03) inset",
          }}
        >
          {/* Thin gold top border */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: "15%",
              right: "15%",
              height: 1,
              background:
                "linear-gradient(90deg, transparent, rgba(245,158,11,0.4), transparent)",
              borderRadius: "0 0 4px 4px",
            }}
          />

          <form onSubmit={handleSubmit}>
            {/* Username field */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              style={{ marginBottom: 16 }}
            >
              <label
                style={{
                  display: "block",
                  fontSize: 11,
                  color: focusedField === "username" ? "#f59e0b" : "#4a5060",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: 8,
                  fontWeight: 500,
                  transition: "color 0.2s",
                }}
              >
                Foydalanuvchi nomi
              </label>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  background:
                    focusedField === "username"
                      ? "rgba(245,158,11,0.05)"
                      : "rgba(0,0,0,0.3)",
                  border: `1px solid ${focusedField === "username" ? "rgba(245,158,11,0.3)" : "rgba(255,255,255,0.06)"}`,
                  borderRadius: 14,
                  padding: "0 16px",
                  transition: "all 0.25s ease",
                  boxShadow:
                    focusedField === "username"
                      ? "0 0 0 3px rgba(245,158,11,0.06)"
                      : "none",
                }}
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  style={{ marginRight: 10, flexShrink: 0 }}
                >
                  <circle
                    cx="7.5"
                    cy="5"
                    r="3"
                    stroke={focusedField === "username" ? "#f59e0b" : "#3a3f4a"}
                    strokeWidth="1.2"
                    style={{ transition: "stroke 0.2s" }}
                  />
                  <path
                    d="M2 13c0-3 2.5-5 5.5-5s5.5 2 5.5 5"
                    stroke={focusedField === "username" ? "#f59e0b" : "#3a3f4a"}
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    style={{ transition: "stroke 0.2s" }}
                  />
                </svg>
                <input
                  className="lux-input"
                  value={form.username}
                  onChange={(e) =>
                    setForm({ ...form, username: e.target.value })
                  }
                  onFocus={() => setFocusedField("username")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="username"
                  autoComplete="username"
                  style={{
                    width: "100%",
                    background: "transparent",
                    border: "none",
                    padding: "14px 0",
                    color: "#f0ece4",
                    fontSize: 14,
                    fontFamily: "'DM Sans', sans-serif",
                    letterSpacing: "0.02em",
                  }}
                />
              </div>
            </motion.div>

            {/* Password field */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.42, duration: 0.5 }}
              style={{ marginBottom: 24 }}
            >
              <label
                style={{
                  display: "block",
                  fontSize: 11,
                  color: focusedField === "password" ? "#f59e0b" : "#4a5060",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: 8,
                  fontWeight: 500,
                  transition: "color 0.2s",
                }}
              >
                Parol
              </label>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  background:
                    focusedField === "password"
                      ? "rgba(245,158,11,0.05)"
                      : "rgba(0,0,0,0.3)",
                  border: `1px solid ${focusedField === "password" ? "rgba(245,158,11,0.3)" : "rgba(255,255,255,0.06)"}`,
                  borderRadius: 14,
                  padding: "0 16px",
                  transition: "all 0.25s ease",
                  boxShadow:
                    focusedField === "password"
                      ? "0 0 0 3px rgba(245,158,11,0.06)"
                      : "none",
                }}
              >
                <svg
                  width="14"
                  height="15"
                  viewBox="0 0 14 15"
                  fill="none"
                  style={{ marginRight: 10, flexShrink: 0 }}
                >
                  <rect
                    x="1"
                    y="6"
                    width="12"
                    height="8.5"
                    rx="3"
                    stroke={focusedField === "password" ? "#f59e0b" : "#3a3f4a"}
                    strokeWidth="1.2"
                    style={{ transition: "stroke 0.2s" }}
                  />
                  <path
                    d="M4 6V4.5a3 3 0 016 0V6"
                    stroke={focusedField === "password" ? "#f59e0b" : "#3a3f4a"}
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    style={{ transition: "stroke 0.2s" }}
                  />
                  <circle
                    cx="7"
                    cy="10.5"
                    r="1"
                    fill={focusedField === "password" ? "#f59e0b" : "#3a3f4a"}
                    style={{ transition: "fill 0.2s" }}
                  />
                </svg>
                <input
                  className="lux-input"
                  type="password"
                  value={form.password}
                  onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                  }
                  onFocus={() => setFocusedField("password")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="••••••••"
                  autoComplete="current-password"
                  style={{
                    width: "100%",
                    background: "transparent",
                    border: "none",
                    padding: "14px 0",
                    color: "#f0ece4",
                    fontSize: 14,
                    fontFamily: "'DM Sans', sans-serif",
                    letterSpacing: "0.08em",
                  }}
                />
              </div>
            </motion.div>

            {/* Error */}
            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -8, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: "auto" }}
                  exit={{ opacity: 0, y: -8, height: 0 }}
                  style={{ overflow: "hidden", marginBottom: 16 }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      background: "rgba(239,68,68,0.08)",
                      border: "1px solid rgba(239,68,68,0.15)",
                      borderRadius: 10,
                      padding: "10px 14px",
                    }}
                  >
                    <div
                      style={{
                        width: 4,
                        height: 4,
                        borderRadius: "50%",
                        background: "#f87171",
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        fontSize: 13,
                        color: "#fca5a5",
                        fontWeight: 400,
                      }}
                    >
                      {error}
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Submit */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <button
                type="submit"
                disabled={loading}
                className="shimmer-btn"
                style={{
                  width: "100%",
                  padding: "15px",
                  borderRadius: 14,
                  border: "none",
                  color: "#1a0f00",
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  fontFamily: "'DM Sans', sans-serif",
                  cursor: loading ? "not-allowed" : "pointer",
                  opacity: loading ? 0.7 : 1,
                  position: "relative",
                  overflow: "hidden",
                  transition: "transform 0.15s, opacity 0.2s",
                  boxShadow:
                    "0 8px 32px rgba(245,158,11,0.25), 0 2px 8px rgba(0,0,0,0.3)",
                }}
                onMouseEnter={(e) => {
                  if (!loading)
                    e.currentTarget.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                }}
                onMouseDown={(e) => {
                  e.currentTarget.style.transform = "translateY(1px)";
                }}
                onMouseUp={(e) => {
                  e.currentTarget.style.transform = "translateY(-1px)";
                }}
              >
                {loading ? (
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 8,
                    }}
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      style={{
                        width: 14,
                        height: 14,
                        border: "2px solid rgba(26,15,0,0.3)",
                        borderTopColor: "#1a0f00",
                        borderRadius: "50%",
                      }}
                    />
                    Tekshirilmoqda...
                  </span>
                ) : (
                  "Kirish"
                )}
              </button>
            </motion.div>
          </form>
        </motion.div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65, duration: 0.6 }}
          style={{
            textAlign: "center",
            marginTop: 24,
            fontSize: 11,
            color: "#2a2f3a",
            letterSpacing: "0.05em",
          }}
        >
          © 2026 PDP Junior · Frontend dars reja platformasi by Asilbek Xoliyorov
        </motion.p>
      </motion.div>
    </main>
  );
}
