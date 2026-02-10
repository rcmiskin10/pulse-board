export interface PlanLimit {
  [key: string]: number
}

export interface Plan {
  id: string
  name: string
  description: string
  price: { monthly: number; yearly?: number }
  priceId?: string
  yearlyPriceId?: string
  limits: PlanLimit
  features: string[]
  highlighted?: boolean
  cta: string
}

export const pricingConfig: {
  model: 'freemium' | 'free-trial' | 'paid-only'
  trialDays?: number
  defaultLimits: PlanLimit
  plans: Plan[]
} = {
  model: 'freemium',

  defaultLimits: {
    dashboards: 1,
    data_sources: 2,
    team_members: 1
  },

  plans: [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Perfect for getting started with your first SaaS metrics dashboard',
      price: { monthly: 0 },
      limits: {
        dashboards: 1,
        data_sources: 2,
        team_members: 1
      },
      features: [
        '1 dashboard',
        'Connect up to 2 data sources',
        'Core metrics (MRR, churn, stars)',
        '30-day data retention',
        'Weekly email digest',
        '1 team member'
      ],
      cta: 'Get Started Free',
    },
    {
      id: 'growth',
      name: 'Growth',
      description: 'For indie hackers actively growing their SaaS business',
      price: { monthly: 19, yearly: 190 },
      priceId: process.env.STRIPE_PRICE_GROWTH,
      limits: {
        dashboards: 10,
        data_sources: -1,
        team_members: 3
      },
      features: [
        'Up to 10 dashboards',
        'Unlimited data sources',
        'Full historical data retention',
        'AI-generated weekly insights',
        'Cross-source correlation alerts',
        'Public dashboard sharing',
        'Peer benchmarking',
        'Up to 3 team members',
        '10K product analytics events/mo'
      ],
      highlighted: true,
      cta: 'Start 14-Day Free Trial',
    },
    {
      id: 'scale',
      name: 'Scale',
      description: 'For growing SaaS teams that need advanced analytics and collaboration',
      price: { monthly: 49, yearly: 490 },
      priceId: process.env.STRIPE_PRICE_SCALE,
      limits: {
        dashboards: -1,
        data_sources: -1,
        team_members: 10
      },
      features: [
        'Unlimited dashboards',
        'Unlimited data sources',
        'Advanced AI insights with forecasting',
        'Custom metric definitions',
        'Unlimited product analytics events',
        'Slack & Discord alerts',
        'API access',
        'Priority support',
        'Up to 10 team members',
        'White-label public dashboards'
      ],
      cta: 'Start 14-Day Free Trial',
    }
  ],
}

const planMap = new Map<string, Plan>()
for (const plan of pricingConfig.plans) {
  planMap.set(plan.id, plan)
}

export function getPlan(tier: string): Plan {
  return planMap.get(tier) || pricingConfig.plans[0]
}

export function getPlanByPriceId(priceId: string): string | null {
  for (const plan of pricingConfig.plans) {
    if (plan.priceId === priceId || plan.yearlyPriceId === priceId) {
      return plan.id
    }
  }
  return null
}

export function getLimits(tier: string | null): PlanLimit {
  if (!tier) return pricingConfig.defaultLimits
  const plan = planMap.get(tier)
  return plan?.limits || pricingConfig.defaultLimits
}

export function checkLimit(tier: string | null, limitKey: string, currentUsage: number): boolean {
  const limits = getLimits(tier)
  const limit = limits[limitKey]
  if (limit === undefined) return false
  if (limit === -1) return true
  return currentUsage < limit
}

export function isPaidTier(tier: string | null): boolean {
  if (!tier) return false
  const plan = planMap.get(tier)
  return plan ? plan.price.monthly > 0 : false
}

export function getFreePlan(): Plan | undefined {
  return pricingConfig.plans.find((p) => p.price.monthly === 0)
}

export function getPaidPlans(): Plan[] {
  return pricingConfig.plans.filter((p) => p.price.monthly > 0)
}

export function getHighlightedPlan(): Plan | undefined {
  return pricingConfig.plans.find((p) => p.highlighted)
}

export function getPlanPrice(tier: string | null): number {
  if (!tier) return 0
  const plan = planMap.get(tier)
  return plan?.price.monthly || 0
}
