import { BarChart, Zap, Star, Globe, Rocket, Users } from 'lucide-react'
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
  url: process.env.NEXT_PUBLIC_APP_URL
    || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : null)
    || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null)
    || 'http://localhost:3000',
  company: 'PulseBoard',

  mainNav: [
    { title: 'Features', href: '/features' },
    { title: 'Pricing', href: '/pricing' },
    { title: 'Blog', href: '/blog' },
    { title: 'Changelog', href: '/changelog' }
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
    headline: 'All Your SaaS Metrics',
    headlineHighlight: 'In One Dashboard',
    subheadline: 'Connect Stripe, GitHub, and your social accounts to see MRR, churn, star count, follower growth, and feature usage at a glance. Get weekly AI-generated insights on what\'s working and what needs your attention — built for indie hackers and small SaaS teams.',
    primaryCta: { text: 'Get Started Free', href: '/register' },
    secondaryCta: { text: 'See How It Works', href: '/features' },
    socialProof: { text: 'Trusted by 1,200+ indie hackers', rating: '4.9/5' },
  },

  features: [
    {
      icon: BarChart,
      title: 'Unified Metrics Dashboard',
      description: 'See your MRR, churn rate, GitHub stars, social followers, and product usage in a single, beautiful view — no more tab-switching.',
      gradient: 'from-violet-500 to-purple-500',
    },
    {
      icon: Zap,
      title: '5-Minute OAuth Setup',
      description: 'Connect Stripe, GitHub, and Twitter/X with a single click each. No code snippets, no event taxonomies — just instant data.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Star,
      title: 'AI Weekly Digest',
      description: 'Receive a concise weekly email highlighting what improved, what needs attention, and one actionable recommendation for the week ahead.',
      gradient: 'from-amber-500 to-orange-500',
    },
    {
      icon: Globe,
      title: 'Public Dashboard Sharing',
      description: 'Generate a shareable public URL for your metrics — perfect for build-in-public updates, investor decks, and community transparency.',
      gradient: 'from-emerald-500 to-green-500',
    },
    {
      icon: Rocket,
      title: 'Milestone Celebrations',
      description: 'Get notified when you cross $1K MRR, hit 500 GitHub stars, or reach follower milestones — celebrate the wins that matter.',
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      icon: Users,
      title: 'Indie Hacker Benchmarks',
      description: 'Compare your churn, growth rate, and engagement against anonymized data from thousands of SaaS companies at your stage.',
      gradient: 'from-indigo-500 to-violet-500',
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
        { title: 'Changelog', href: '/changelog' },
        { title: 'Integrations', href: '/features#integrations' }
      ],
    },
    {
      title: 'Company',
      links: [
        { title: 'About', href: '/about' },
        { title: 'Blog', href: '/blog' },
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
