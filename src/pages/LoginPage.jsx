import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../utils/auth";

export default function LoginPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [focusedField, setFocusedField] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    await new Promise((r) => setTimeout(r, 500));

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
        background:
          "radial-gradient(circle at 50% -10%, rgba(59,130,246,0.22), transparent 34%), linear-gradient(135deg, #020617 0%, #08111f 45%, #020617 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        position: "relative",
        overflow: "hidden",
        fontFamily: "'DM Sans', sans-serif",
        zIndex: "10000",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');

        .lux-input::placeholder {
          color: #475569;
        }

        .lux-input:focus {
          outline: none;
        }

        .login-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 18px 45px rgba(37, 99, 235, 0.34);
        }

        .login-btn:active {
          transform: translateY(0);
        }
      `}</style>

      {/* luxury background decoration */}
      <div
        style={{
          position: "absolute",
          width: 520,
          height: 520,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(37,99,235,0.16), transparent 65%)",
          top: "-180px",
          right: "-140px",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          width: 420,
          height: 420,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(14,165,233,0.12), transparent 65%)",
          bottom: "-160px",
          left: "-120px",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          width: "100%",
          maxWidth: 430,
          position: "relative",
          zIndex: 10,
        }}
      >
        {/* Logo */}
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <div
            className="flex items-center justify-center"
          >
            <img style={{ height: 42 }} src="/logo.svg" alt="" />
          </div>

          <p
            style={{
              margin: "9px 0 0",
              color: "#64748b",
              fontSize: 13,
              lineHeight: 1.6,
            }}
          >
            PDP Junior frontend dars reja platformasiga kirish
          </p>
        </div>

        {/* Card */}
        <div
          style={{
            position: "relative",
            borderRadius: 30,
            padding: 1,
            background:
              "linear-gradient(145deg, rgba(96,165,250,0.45), rgba(255,255,255,0.06), rgba(37,99,235,0.18))",
            boxShadow:
              "0 40px 90px rgba(0,0,0,0.55), 0 20px 60px rgba(37,99,235,0.12)",
          }}
        >
          <div
            style={{
              borderRadius: 29,
              padding: "34px 30px",
              background:
                "linear-gradient(180deg, rgba(15,23,42,0.94), rgba(2,6,23,0.96))",
              border: "1px solid rgba(255,255,255,0.04)",
            }}
          >
            <form onSubmit={handleSubmit}>
              {/* Username */}
              <div style={{ marginBottom: 18 }}>
                <label
                  style={{
                    display: "block",
                    color: focusedField === "username" ? "#60a5fa" : "#94a3b8",
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginBottom: 9,
                  }}
                >
                  Foydalanuvchi nomi
                </label>

                <div
                  style={{
                    height: 52,
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    padding: "0 15px",
                    borderRadius: 16,
                    background:
                      focusedField === "username"
                        ? "rgba(37,99,235,0.12)"
                        : "rgba(15,23,42,0.82)",
                    border:
                      focusedField === "username"
                        ? "1px solid rgba(96,165,250,0.48)"
                        : "1px solid rgba(148,163,184,0.13)",
                    boxShadow:
                      focusedField === "username"
                        ? "0 0 0 4px rgba(37,99,235,0.10)"
                        : "none",
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M20 21a8 8 0 0 0-16 0"
                      stroke={
                        focusedField === "username" ? "#60a5fa" : "#64748b"
                      }
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                    <circle
                      cx="12"
                      cy="8"
                      r="4"
                      stroke={
                        focusedField === "username" ? "#60a5fa" : "#64748b"
                      }
                      strokeWidth="1.8"
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
                      height: "100%",
                      background: "transparent",
                      border: "none",
                      color: "#f8fafc",
                      fontSize: 14,
                      fontWeight: 500,
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  />
                </div>
              </div>

              {/* Password */}
              <div style={{ marginBottom: 18 }}>
                <label
                  style={{
                    display: "block",
                    color: focusedField === "password" ? "#60a5fa" : "#94a3b8",
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginBottom: 9,
                  }}
                >
                  Parol
                </label>

                <div
                  style={{
                    height: 52,
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    padding: "0 13px 0 15px",
                    borderRadius: 16,
                    background:
                      focusedField === "password"
                        ? "rgba(37,99,235,0.12)"
                        : "rgba(15,23,42,0.82)",
                    border:
                      focusedField === "password"
                        ? "1px solid rgba(96,165,250,0.48)"
                        : "1px solid rgba(148,163,184,0.13)",
                    boxShadow:
                      focusedField === "password"
                        ? "0 0 0 4px rgba(37,99,235,0.10)"
                        : "none",
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <rect
                      x="5"
                      y="10"
                      width="14"
                      height="10"
                      rx="3"
                      stroke={
                        focusedField === "password" ? "#60a5fa" : "#64748b"
                      }
                      strokeWidth="1.8"
                    />
                    <path
                      d="M8 10V7a4 4 0 0 1 8 0v3"
                      stroke={
                        focusedField === "password" ? "#60a5fa" : "#64748b"
                      }
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>

                  <input
                    className="lux-input"
                    type={showPassword ? "text" : "password"}
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
                      height: "100%",
                      background: "transparent",
                      border: "none",
                      color: "#f8fafc",
                      fontSize: 14,
                      fontWeight: 500,
                      letterSpacing: showPassword ? "0.02em" : "0.08em",
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label="Show password"
                    style={{
                      width: 34,
                      height: 34,
                      borderRadius: 10,
                      border: "1px solid rgba(148,163,184,0.14)",
                      background: "rgba(255,255,255,0.03)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      flexShrink: 0,
                    }}
                  >
                    {showPassword ? (
                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M3 3l18 18"
                          stroke="#60a5fa"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                        />
                        <path
                          d="M10.6 10.6a2 2 0 0 0 2.8 2.8"
                          stroke="#60a5fa"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                        />
                        <path
                          d="M9.9 5.2A9.8 9.8 0 0 1 12 5c5.5 0 9 5 9 7a6.8 6.8 0 0 1-2 3"
                          stroke="#60a5fa"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                        />
                        <path
                          d="M6.6 6.8C4.3 8.3 3 10.6 3 12c0 2 3.5 7 9 7 1.1 0 2.1-.2 3-.6"
                          stroke="#60a5fa"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M3 12s3.5-7 9-7 9 7 9 7-3.5 7-9 7-9-7-9-7Z"
                          stroke="#60a5fa"
                          strokeWidth="1.8"
                          strokeLinejoin="round"
                        />
                        <circle
                          cx="12"
                          cy="12"
                          r="3"
                          stroke="#60a5fa"
                          strokeWidth="1.8"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Error */}
              {error && (
                <div
                  style={{
                    marginBottom: 16,
                    padding: "12px 14px",
                    borderRadius: 14,
                    background: "rgba(239,68,68,0.10)",
                    border: "1px solid rgba(248,113,113,0.22)",
                    color: "#fca5a5",
                    fontSize: 13,
                    fontWeight: 500,
                  }}
                >
                  {error}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="login-btn"
                style={{
                  width: "100%",
                  height: 52,
                  borderRadius: 16,
                  border: "none",
                  background:
                    "linear-gradient(135deg, #60a5fa 0%, #3b82f6 45%, #2563eb 100%)",
                  color: "#ffffff",
                  fontSize: 13,
                  fontWeight: 800,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  fontFamily: "'DM Sans', sans-serif",
                  cursor: loading ? "not-allowed" : "pointer",
                  opacity: loading ? 0.72 : 1,
                  boxShadow:
                    "0 14px 36px rgba(37,99,235,0.28), inset 0 1px 0 rgba(255,255,255,0.26)",
                  transition: "0.18s ease",
                }}
              >
                {loading ? "Tekshirilmoqda..." : "Kirish"}
              </button>
            </form>
          </div>
        </div>

        <p
          style={{
            textAlign: "center",
            marginTop: 22,
            color: "#475569",
            fontSize: 11,
            lineHeight: 1.6,
          }}
        >
          © 2026 PDP Junior · Frontend dars reja platformasi by Asilbek
          Xoliyorov
        </p>
      </div>
    </main>
  );
}
