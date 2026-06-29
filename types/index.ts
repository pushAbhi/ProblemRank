import type {LucideIcon} from "lucide-react";
import {LayoutGrid, Megaphone, DollarSign, Search, Package, Smile, Settings, MessageSquare, Box, Users, BarChart3, Heart, ShoppingCart, Shield, Bot} from "lucide-react"

export const Icons: Record<string, LucideIcon> = {
  LayoutGrid, Megaphone, DollarSign, Search, Package, Smile, Settings, MessageSquare, Box, Users, BarChart3, Heart, ShoppingCart, Shield, Bot
}

export type Tone = "violet" | "rose" | "emerald" | "sky" | "orange" | "amber" | "slate" | "indigo" | "pink" | "lime" | "fuchsia" ;

export const tones: Record<Tone, string> = {
  emerald: "bg-emerald-100 text-emerald-600",
  violet: "bg-violet-100 text-violet-600",
  orange: "bg-orange-100 text-orange-600",
  sky: "bg-sky-100 text-sky-600",
  rose: "bg-rose-100 text-rose-600",
  amber: "bg-amber-100 text-amber-600",
  indigo: "bg-indigo-100 text-indigo-600",
  pink: "bg-pink-100 text-pink-600",
  lime: "bg-lime-100 text-lime-600",
  fuchsia: "bg-fuchsia-100 text-fuchsia-600",
  slate: "bg-slate-100 text-slate-600",
};

interface Tag {
  id: string,
  name: string
}

export interface ProblemRowProps {
  rank: number;
  title: string;
  tags: Tag[];
  score: number;
  icon: LucideIcon;
  tone: Tone;
}

export interface CategoryCardProps {
  icon: string;
  label: string;
  count: number;
  tone: Tone;
  active?: boolean;
  onClick?: () => void
}

export type SigninProvider = "github" | "google" | "linkedin"