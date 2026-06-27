"use client"

import { useState } from "react";
import { User, Mail, Lock, Eye, EyeOff } from "lucide-react";

export default function AuthCard() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center px-4 fixed z-50 inset-0 bg-background/30">
      <div
        className="w-full max-w-sm rounded-2xl p-8 flex flex-col items-center gap-6 bg-card">
        {/* User Avatar Icon */}
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center bg-card-hover-blue">
          <User
            className="w-8 h-8"
            style={{ color: "var(--color-foreground)" }}
            strokeWidth={1.5}/>
        </div>

        {/* Heading */}
        <div className="text-center space-y-1">
          <h1 className="text-2xl font-bold text-gray-900">
            Welcome back 👋
          </h1>
          <p
            className="text-sm"
            style={{ color: "var(--color-muted-foreground)" }}>
            Sign in to your ProblemRank account
          </p>
        </div>

        {/* Form */}
        <div className="w-full flex flex-col gap-4">
          {/* Email Field */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="email"
              className="text-sm font-semibold text-gray-900">
              Email address
            </label>
            <div
              className="flex items-center gap-2 rounded-lg border px-3 py-2.5 transition-colors focus-within:border-foregrounding-2 focus-within:ring-foreground/10"
              style={{
                borderColor: "var(--color-hover-dark)",
                backgroundColor: "var(--color-secondary)",
              }}>
              <Mail
                className="w-4 h-4 shrink-0"
                style={{ color: "var(--color-muted-foreground)" }}/>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-transparent text-sm outline-none placeholder:text-gray-400"
                style={{ color: "var(--color-foreground)" }}/>
            </div>
          </div>

          {/* Password Field */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="password"
              className="text-sm font-semibold text-gray-900">
              Password
            </label>
            <div
              className="flex items-center gap-2 rounded-lg border px-3 py-2.5 transition-colors focus-within:border-foreground focus-within:ring-2 focus-within:ring-foreground/10"
              style={{
                borderColor: "var(--color-hover-dark)",
                backgroundColor: "var(--color-secondary)",
              }}>
              <Lock
                className="w-4 h-4 shrink-0"
                style={{ color: "var(--color-muted-foreground)" }}/>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="flex-1 bg-transparent text-sm outline-none placeholder:text-gray-400"
                style={{ color: "var(--color-foreground)" }}/>
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="shrink-0 transition-opacity hover:opacity-70"
                aria-label={showPassword ? "Hide password" : "Show password"}>
                {showPassword ? (
                  <EyeOff
                    className="w-4 h-4"
                    style={{ color: "var(--color-muted-foreground)" }}/>
                ) : (
                  <Eye
                    className="w-4 h-4"
                    style={{ color: "var(--color-muted-foreground)" }}/>
                )}
              </button>
            </div>
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end -mt-1">
            <a
              href="#"
              className="text-sm font-semibold transition-opacity hover:opacity-75"
              style={{ color: "var(--color-foreground)" }}>
              Forgot password?
            </a>
          </div>

          {/* Sign In Button */}
          <button
            type="button"
            className="w-full py-3 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-90 active:opacity-80"
            style={{ backgroundColor: "var(--color-brand-foreground)" }}>
            Sign in
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3">
            <div
              className="flex-1 h-px"
              style={{ backgroundColor: "var(--color-hover-dark)" }}/>
            <span
              className="text-xs"
              style={{ color: "var(--color-muted-foreground)" }}>
              or continue with
            </span>
            <div
              className="flex-1 h-px"
              style={{ backgroundColor: "var(--color-hover-dark)" }}/>
          </div>

          {/* Google Button */}
          <button
            type="button"
            className="w-full flex items-center justify-center gap-2.5 py-3 rounded-xl border text-sm font-medium text-gray-700 transition-colors hover:bg-hover-dark"
            style={{ borderColor: "var(--color-hover-dark)" }}>
            Continue with Google
          </button>
        </div>

        {/* Sign Up Link */}
        <p
          className="text-sm"
          style={{ color: "var(--color-muted-foreground)" }}>
          Don&apos;t have an account?{" "}
          <a
            href="#"
            className="font-semibold transition-opacity hover:opacity-75"
            style={{ color: "var(--color-foreground)" }}>
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}