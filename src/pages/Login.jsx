import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Lock, UserCog, Eye, EyeOff, Leaf } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import loginImage from "../assets/hero-tractor.jpg";

const MotionPage = motion.div;

const inputBase =
  "w-full bg-[#020617] border border-[#334155] text-white placeholder-slate-500 rounded-xl px-4 py-3 pl-11 text-sm outline-none transition-all duration-300 focus:border-[#22c55e]";

const glowStyle = {
  boxShadow: "0 0 0 3px rgba(34, 197, 94, 0.25)",
};

const pageVariants = {
  initial: { opacity: 0, y: 32 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
  exit: { opacity: 0, y: -24, transition: { duration: 0.3, ease: "easeIn" } },
};

const formVariants = {
  initial: { opacity: 0, scale: 0.96 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.065, delayChildren: 0.2 } },
};

const fieldVariant = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [form, setForm] = useState({ email: "", password: "", role: "" });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const validate = () => {
    const errs = {};
    if (!form.email) errs.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      errs.email = "Invalid email address.";
    if (!form.password) errs.password = "Password is required.";
    else if (form.password.length < 6) errs.password = "Minimum 6 characters.";
    if (!form.role) errs.role = "Please select a role.";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});

    login({
      email: form.email,
      name: form.email.split("@")[0],
      role: form.role,
    });

    navigate(`/dashboard/${form.role}`);
  };

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const getInputStyle = (field) => ({
    ...(focusedField === field ? glowStyle : {}),
    ...(errors[field] ? { borderColor: "#ef4444" } : {}),
  });

  return (
    <MotionPage
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-4 py-8 sm:px-6 lg:px-8"
      style={{
        background:
          "linear-gradient(135deg, #f8fafc 0%, #ecfdf5 48%, #d9f99d 100%)",
      }}
    >
      <div
        className="absolute inset-0 opacity-[0.18] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(21,128,61,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(21,128,61,0.18) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <motion.div
        variants={formVariants}
        initial="initial"
        animate="animate"
        className="relative grid w-full max-w-5xl overflow-hidden lg:grid-cols-[1.05fr_0.95fr]"
        style={{
          background: "rgba(255, 255, 255, 0.92)",
          border: "1px solid rgba(15, 118, 110, 0.18)",
          borderRadius: "8px",
          boxShadow:
            "0 28px 70px rgba(15, 23, 42, 0.16), 0 1px 0 rgba(255,255,255,0.85) inset",
        }}
      >
        <div className="relative min-h-[260px] overflow-hidden lg:min-h-[640px]">
          <img
            src={loginImage}
            alt="Farm field with tractor"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(2,6,23,0.12) 0%, rgba(3,47,34,0.74) 100%)",
            }}
          />

          <div className="relative z-10 flex h-full min-h-[260px] flex-col justify-between p-6 text-white sm:p-8 lg:min-h-[640px] lg:p-10">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/20 backdrop-blur">
                <Leaf size={23} strokeWidth={2.2} />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-100">
                  Waranmayii
                </p>
                <p className="text-sm text-emerald-50/80">Krishi Resource</p>
              </div>
            </div>

            <div className="max-w-md">
              <h1
                className="text-3xl font-bold leading-tight sm:text-4xl"
                style={{ fontFamily: "'Rajdhani', sans-serif" }}
              >
                Manage field teams with clearer farm insight.
              </h1>
              <p className="mt-3 text-sm leading-6 text-emerald-50/90 sm:text-base">
                Sign in to track advisors, sales, reports, and regional
                performance from one focused dashboard.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center p-6 sm:p-8 lg:p-10">
          <div className="w-full max-w-md">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mb-6 flex items-center gap-4"
            >
              <div
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl"
                style={{
                  background: "linear-gradient(135deg, #22c55e, #84cc16)",
                  boxShadow: "0 8px 24px rgba(34,197,94,0.28)",
                }}
              >
                <Leaf size={26} className="text-white" strokeWidth={2.2} />
              </div>
              <div>
                <h1
                  className="mb-1 text-3xl font-bold text-slate-950"
                  style={{ fontFamily: "'Rajdhani', sans-serif" }}
                >
                  Welcome Back
                </h1>
                <p className="text-sm text-slate-500">
                  Sign in to continue your journey
                </p>
              </div>
            </motion.div>

            <motion.form
              variants={stagger}
              initial="initial"
              animate="animate"
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <motion.div variants={fieldVariant}>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-slate-600">
                  Role
                </label>
                <div className="relative">
                  <UserCog
                    size={16}
                    className="absolute left-3.5 top-1/2 z-10 -translate-y-1/2 pointer-events-none"
                    style={{
                      color: focusedField === "role" ? "#22c55e" : "#475569",
                    }}
                  />
                  <select
                    value={form.role}
                    onChange={handleChange("role")}
                    onFocus={() => setFocusedField("role")}
                    onBlur={() => setFocusedField(null)}
                    className={inputBase + " appearance-none cursor-pointer"}
                    style={{
                      ...getInputStyle("role"),
                      color: form.role ? "#fff" : "#64748b",
                    }}
                  >
                    <option value="" disabled>
                      Select your role
                    </option>
                    <option value="advisor" style={{ background: "#020617", color: "#fff" }}>
                      Advisor
                    </option>
                    <option value="domanager" style={{ background: "#020617", color: "#fff" }}>
                      DO Manager
                    </option>
                    <option value="areamanager" style={{ background: "#020617", color: "#fff" }}>
                      Area Manager
                    </option>
                    <option value="zonalmanager" style={{ background: "#020617", color: "#fff" }}>
                      Zonal Manager
                    </option>
                    <option value="statehead" style={{ background: "#020617", color: "#fff" }}>
                      State Head
                    </option>
                  </select>
                  <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M2 4L6 8L10 4"
                        stroke="#475569"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                {errors.role && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-1.5 flex items-center gap-1 text-xs text-[#ef4444]"
                  >
                    <span className="inline-block h-1 w-1 rounded-full bg-[#ef4444]" />
                    {errors.role}
                  </motion.p>
                )}
              </motion.div>

              <motion.div variants={fieldVariant}>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-slate-600">
                  Email Address
                </label>
                <div className="relative">
                  <Mail
                    size={16}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                    style={{
                      color: focusedField === "email" ? "#22c55e" : "#475569",
                    }}
                  />
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange("email")}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    className={inputBase}
                    style={getInputStyle("email")}
                  />
                </div>
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-1.5 flex items-center gap-1 text-xs text-[#ef4444]"
                  >
                    <span className="inline-block h-1 w-1 rounded-full bg-[#ef4444]" />
                    {errors.email}
                  </motion.p>
                )}
              </motion.div>

              <motion.div variants={fieldVariant}>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-slate-600">
                  Password
                </label>
                <div className="relative">
                  <Lock
                    size={16}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                    style={{
                      color:
                        focusedField === "password" ? "#22c55e" : "#475569",
                    }}
                  />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={form.password}
                    onChange={handleChange("password")}
                    onFocus={() => setFocusedField("password")}
                    onBlur={() => setFocusedField(null)}
                    className={inputBase + " pr-11"}
                    style={getInputStyle("password")}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500 transition-colors hover:text-emerald-400"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
                {errors.password && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-1.5 flex items-center gap-1 text-xs text-[#ef4444]"
                  >
                    <span className="inline-block h-1 w-1 rounded-full bg-[#ef4444]" />
                    {errors.password}
                  </motion.p>
                )}
              </motion.div>

              <motion.div variants={fieldVariant} className="flex justify-end -mt-1">
                <button
                  type="button"
                  className="text-xs font-medium text-emerald-600 transition-colors hover:text-emerald-700"
                >
                  Forgot password?
                </button>
              </motion.div>

              <motion.div variants={fieldVariant}>
                <motion.button
                  type="submit"
                  whileHover={{
                    scale: 1.025,
                    boxShadow: "0 8px 30px rgba(34,197,94,0.35)",
                  }}
                  whileTap={{ scale: 0.975 }}
                  className="relative w-full overflow-hidden rounded-xl py-3 text-sm font-bold tracking-[0.08em] text-white transition-all duration-200"
                  style={{
                    background: "linear-gradient(to right, #84cc16, #22c55e)",
                    boxShadow: "0 4px 16px rgba(34,197,94,0.3)",
                    fontFamily: "'Rajdhani', sans-serif",
                    fontSize: "15px",
                  }}
                >
                  <span className="relative z-10">LOGIN</span>
                  <div
                    className="absolute inset-0 opacity-0 transition-opacity duration-300 hover:opacity-100"
                    style={{
                      background:
                        "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.15) 50%, transparent 60%)",
                    }}
                  />
                </motion.button>
              </motion.div>
            </motion.form>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="my-4 flex items-center gap-3"
            >
              <div className="h-px flex-1 bg-slate-200" />
              <span className="text-xs font-medium text-slate-400">OR</span>
              <div className="h-px flex-1 bg-slate-200" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65 }}
              className="text-center text-sm text-slate-500"
            >
              New user?{" "}
              <motion.button
                whileHover={{ color: "#047857" }}
                onClick={() => navigate("/register")}
                className="font-semibold text-emerald-600 underline-offset-4 transition-colors hover:text-emerald-700 hover:underline"
              >
                Register here
              </motion.button>
            </motion.p>
          </div>
        </div>
      </motion.div>
    </MotionPage>
  );
}
