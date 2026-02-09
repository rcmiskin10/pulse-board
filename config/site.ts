import { BarChart, Zap, Star, Globe, Search, Shield } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface NavItem {
  title: string
  href: string
  external?: boolean
}

export interface FooterLink {
  title: string
  href: string
}

export interface FooterSection {
  title: string
  links: FooterLink[]
}

export interface Feature {
  icon: LucideIcon
  title: string
  description: string
  gradient: string
}

export interface HeroContent {
  badge: string
  headline: string
  headlineHighlight: string
  subheadline: string
  primaryCta: { text: string; href: string }
  secondaryCta: { text: string; href: string }
  socialProof?: { text: string; rating: string }
}

export interface SiteConfig {
  name: string
  tagline: string
  description: string
  url: string
  company: string
  mainNav: NavItem[]
  dashboardNav: NavItem[]
  hero: HeroContent
  features: Feature[]
  techStack: Array<{ name: string; color: string }>
  footerSections: FooterSection[]
  footerCopyright: string
  social: {
    twitter?: string
    github?: string
    discord?: string
  }
}

export const siteConfig: SiteConfig = {
  name: 'PulseBoard',
  tagline: 'Your entire SaaS business in one beautiful dashboard',
  description: 'Real-time analytics dashboard unifying Stripe, GitHub, and social metrics with AI insights for indie hackers.',
  url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  company: 'PulseBoard',

  mainNav: [
    { title: 'Features', href: '/features' },
    { title: 'Pricing', href: '/pricing' },
    { title: 'Blog', href: '/blog' },
    { title: 'Docs', href: '/docs' }
  ],

  dashboardNav: [
    { title: 'Overview', href: '/dashboard' },
    { title: 'Dashboards', href: '/dashboard/dashboards' },
    { title: 'Integrations', href: '/dashboard/integrations' },
    { title: 'AI Insights', href: '/dashboard/insights' },
    { title: 'Settings', href: '/dashboard/settings' }
  ],

  hero: {
    badge: 'Now with AI-powered insights',
    headline: 'Your Entire SaaS Business in One Beautiful Dashboard',
    headlineHighlight: 'One Beautiful Dashboard',
    subheadline: 'Stop tab-switching between Stripe, GitHub, and Twitter. PulseBoard unifies your MRR, churn, star count, follower growth, and feature usage — then delivers weekly AI insights telling you exactly what\'s working and what needs attention.',
    primaryCta: { text: 'Get Started Free', href: '/register' },
    secondaryCta: { text: 'See How It Works', href: '/features' },
    socialProof: { text: 'Trusted by 2,000+ indie hackers and small SaaS teams', rating: '4.9/5' },
  },

  features: [
    {
      icon: BarChart,
      title: 'Unified Metrics Dashboard',
      description: 'See your MRR, churn rate, GitHub stars, and social growth in a single, opinionated view designed for founders — no configuration required.',
      gradient: 'from-violet-500 to-purple-500',
    },
    {
      icon: Zap,
      title: 'One-Click Integrations',
      description: 'Connect Stripe, GitHub, and Twitter/X via OAuth in under 5 minutes. Your dashboard populates instantly with real-time data.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Star,
      title: 'Weekly AI Insights',
      description: 'Receive a personalized weekly digest that highlights anomalies, surfaces correlations, and gives you 2-3 actionable recommendations.',
      gradient: 'from-amber-500 to-orange-500',
    },
    {
      icon: Globe,
      title: 'Build in Public Cards',
      description: 'Auto-generate beautiful, shareable milestone cards for Twitter/X and LinkedIn. Celebrate your wins and grow your audience effortlessly.',
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      icon: Search,
      title: 'Correlation Engine',
      description: 'Automatically discover what drives your growth. See how GitHub releases, social posts, and product changes correlate with revenue outcomes.',
      gradient: 'from-rose-500 to-pink-500',
    },
    {
      icon: Shield,
      title: 'Smart Alerts & Anomaly Detection',
      description: 'Get notified via Slack, Discord, or email when something important changes — churn spikes, MRR milestones, or viral star growth.',
      gradient: 'from-indigo-500 to-blue-500',
    }
  ],

  techStack: [
    { name: 'Next.js', color: 'bg-black text-white' },
    { name: 'Supabase', color: 'bg-emerald-600 text-white' },
    { name: 'Stripe', color: 'bg-purple-600 text-white' },
    { name: 'OpenAI', color: 'bg-gray-800 text-white' },
    { name: 'Tailwind CSS', color: 'bg-sky-500 text-white' }
  ],

  footerSections: [
    {
      title: 'Product',
      links: [
        { title: 'Features', href: '/features' },
        { title: 'Pricing', href: '/pricing' },
        { title: 'Integrations', href: '/features#integrations' },
        { title: 'Changelog', href: '/changelog' }
      ],
    },
    {
      title: 'Company',
      links: [
        { title: 'About', href: '/about' },
        { title: 'Blog', href: '/blog' },
        { title: 'Docs', href: '/docs' },
        { title: 'Contact', href: '/contact' }
      ],
    },
    {
      title: 'Legal',
      links: [
        { title: 'Privacy Policy', href: '/privacy' },
        { title: 'Terms of Service', href: '/terms' },
        { title: 'Data Processing', href: '/dpa' }
      ],
    }
  ],

  footerCopyright: '2026 PulseBoard. All rights reserved.',

  social: {
    discord: 'https://discord.gg/pulseboard',
    github: 'https://github.com/pulseboard',
    twitter: 'https://twitter.com/pulseboard'
  },
}
