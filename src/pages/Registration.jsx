import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  User,
  CheckCircle2,
  Leaf,
} from "lucide-react";
import registerImage from "../assets/hero-tractor.jpg";

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

function getStrength(password) {
  if (!password) return 0;
  let score = 0;
  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;
  return score;
}

const strengthColors = ["#ef4444", "#f97316", "#eab308", "#22c55e"];
const strengthLabels = ["Weak", "Fair", "Good", "Strong"];

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Full name is required.";
    else if (form.name.trim().length < 2) errs.name = "Name too short.";
    if (!form.email) errs.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      errs.email = "Invalid email address.";
    if (!form.password) errs.password = "Password is required.";
    else if (form.password.length < 6) errs.password = "Minimum 6 characters.";
    if (!form.confirmPassword)
      errs.confirmPassword = "Please confirm your password.";
    else if (form.password !== form.confirmPassword)
      errs.confirmPassword = "Passwords don't match.";
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
    setSubmitted(true);
  };

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const getInputStyle = (field) => ({
    ...(focusedField === field ? glowStyle : {}),
    ...(errors[field] ? { borderColor: "#ef4444" } : {}),
  });

  const strength = getStrength(form.password);

  if (submitted) {
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
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-lg border border-emerald-700/15 bg-white/95 px-8 py-10 text-center shadow-[0_28px_70px_rgba(15,23,42,0.16)]"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
              delay: 0.1,
            }}
            className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{
              background: "linear-gradient(135deg, #22c55e, #84cc16)",
              boxShadow: "0 0 40px rgba(34,197,94,0.5)",
            }}
          >
            <CheckCircle2 size={38} className="text-white" strokeWidth={2} />
          </motion.div>
          <h2
            className="text-3xl font-bold text-slate-950 mb-2"
            style={{ fontFamily: "'Rajdhani', sans-serif" }}
          >
            Account Created!
          </h2>
          <p className="text-slate-500 mb-8 text-sm">
            Welcome aboard, {form.name.split(" ")[0]}.
          </p>
          <motion.button
            whileHover={{
              scale: 1.04,
              boxShadow: "0 8px 30px rgba(34,197,94,0.45)",
            }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate("/login")}
            className="px-8 py-3 rounded-xl text-white font-bold text-sm tracking-wide"
            style={{
              background: "linear-gradient(to right, #84cc16, #22c55e)",
              fontFamily: "'Rajdhani', sans-serif",
              fontSize: "15px",
              letterSpacing: "0.08em",
            }}
          >
            GO TO LOGIN
          </motion.button>
        </motion.div>
      </MotionPage>
    );
  }

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
            src={registerImage}
            alt="Farm field with tractor"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(2,6,23,0.1) 0%, rgba(3,47,34,0.76) 100%)",
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
                Start managing smarter agriculture workflows.
              </h1>
              <p className="mt-3 text-sm leading-6 text-emerald-50/90 sm:text-base">
                Create your account to connect field activity, team reporting,
                and regional performance in one place.
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
                Create Account
              </h1>
              <p className="text-sm text-slate-500">
                Join the eco-tech movement today
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
                <label className="block text-xs font-semibold text-slate-600 uppercase tracking-widest mb-1.5">
                  Full Name
                </label>
                <div className="relative">
                  <User
                    size={16}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                    style={{
                      color: focusedField === "name" ? "#22c55e" : "#475569",
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Jane Doe"
                    value={form.name}
                    onChange={handleChange("name")}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    className={inputBase}
                    style={getInputStyle("name")}
                  />
                </div>
                {errors.name && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-1.5 text-xs text-[#ef4444] flex items-center gap-1"
                  >
                    <span className="inline-block w-1 h-1 rounded-full bg-[#ef4444]" />
                    {errors.name}
                  </motion.p>
                )}
              </motion.div>

              <motion.div variants={fieldVariant}>
                <label className="block text-xs font-semibold text-slate-600 uppercase tracking-widest mb-1.5">
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
                    className="mt-1.5 text-xs text-[#ef4444] flex items-center gap-1"
                  >
                    <span className="inline-block w-1 h-1 rounded-full bg-[#ef4444]" />
                    {errors.email}
                  </motion.p>
                )}
              </motion.div>

              <motion.div variants={fieldVariant}>
                <label className="block text-xs font-semibold text-slate-600 uppercase tracking-widest mb-1.5">
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

                {form.password && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-2"
                  >
                    <div className="flex gap-1 mb-1">
                      {[1, 2, 3, 4].map((s) => (
                        <div
                          key={s}
                          className="flex-1 h-1 rounded-full transition-all duration-300"
                          style={{
                            background:
                              s <= strength
                                ? strengthColors[strength - 1]
                                : "#1e293b",
                          }}
                        />
                      ))}
                    </div>
                    <p
                      className="text-xs"
                      style={{
                        color: strengthColors[strength - 1] || "#475569",
                      }}
                    >
                      {form.password
                        ? strengthLabels[strength - 1] || "Too short"
                        : ""}
                    </p>
                  </motion.div>
                )}

                {errors.password && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-1.5 text-xs text-[#ef4444] flex items-center gap-1"
                  >
                    <span className="inline-block w-1 h-1 rounded-full bg-[#ef4444]" />
                    {errors.password}
                  </motion.p>
                )}
              </motion.div>

              <motion.div variants={fieldVariant}>
                <label className="block text-xs font-semibold text-slate-600 uppercase tracking-widest mb-1.5">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock
                    size={16}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                    style={{
                      color:
                        focusedField === "confirmPassword"
                          ? "#22c55e"
                          : "#475569",
                    }}
                  />
                  <input
                    type={showConfirm ? "text" : "password"}
                    placeholder="Confirm password"
                    value={form.confirmPassword}
                    onChange={handleChange("confirmPassword")}
                    onFocus={() => setFocusedField("confirmPassword")}
                    onBlur={() => setFocusedField(null)}
                    className={inputBase + " pr-11"}
                    style={{
                      ...getInputStyle("confirmPassword"),
                      ...(form.confirmPassword &&
                      form.password === form.confirmPassword
                        ? { borderColor: "#22c55e" }
                        : {}),
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirm((v) => !v)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500 transition-colors hover:text-emerald-400"
                    aria-label={
                      showConfirm ? "Hide confirm password" : "Show confirm password"
                    }
                  >
                    {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                  {form.confirmPassword &&
                    form.password === form.confirmPassword && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="absolute right-10 top-1/2 -translate-y-1/2"
                      >
                        <CheckCircle2 size={15} className="text-emerald-400" />
                      </motion.div>
                    )}
                </div>
                {errors.confirmPassword && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-1.5 text-xs text-[#ef4444] flex items-center gap-1"
                  >
                    <span className="inline-block w-1 h-1 rounded-full bg-[#ef4444]" />
                    {errors.confirmPassword}
                  </motion.p>
                )}
              </motion.div>

              <motion.div variants={fieldVariant} className="pt-1">
                <motion.button
                  type="submit"
                  whileHover={{
                    scale: 1.025,
                    boxShadow: "0 8px 30px rgba(34,197,94,0.45)",
                  }}
                  whileTap={{ scale: 0.975 }}
                  className="relative w-full overflow-hidden rounded-xl py-3 text-sm font-bold tracking-[0.08em] text-white transition-all duration-200"
                  style={{
                    background: "linear-gradient(to right, #84cc16, #22c55e)",
                    boxShadow: "0 4px 16px rgba(34,197,94,0.3)",
                    fontFamily: "'Rajdhani', sans-serif",
                    fontSize: "15px",
                    letterSpacing: "0.08em",
                  }}
                >
                  <span className="relative z-10">CREATE ACCOUNT</span>
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
              Already have an account?{" "}
              <motion.button
                whileHover={{ color: "#047857" }}
                onClick={() => navigate("/login")}
                className="font-semibold text-emerald-600 underline-offset-4 transition-colors hover:text-emerald-700 hover:underline"
              >
                Login
              </motion.button>
            </motion.p>
          </div>
        </div>
      </motion.div>
    </MotionPage>
  );
}
