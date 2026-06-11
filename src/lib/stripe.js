import 'server-only'

import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export const PLAN_PRICE_ID = {
    'seeker_pro': 'price_1Tgshl400u5j56GMOSFsKE77',
    'seeker_premium': 'price_1ThCmi400u5j56GMsW1nWUdO',
    'recruiter_growth': 'price_1ThCq1400u5j56GM2AchLx8J',
    'recruiter_enterprise': 'price_1ThCqw400u5j56GMJkD48aN0',
}