import { NextResponse } from 'next/server'
import { headers } from 'next/headers'

import { PLAN_PRICE_ID, stripe } from '../../../lib/stripe'
import { getUserSession } from '@/lib/core/session';

export async function POST(request) {
  try {
    const headersList = await headers()
    const origin = headersList.get('origin');

    const formData = await request.formData();
    const planId = formData.get('plan_id');
    const priceId = PLAN_PRICE_ID[planId];

    const user = await getUserSession(); // cusstomers email address

    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
      customer_email: user?.email,

      line_items: [
        {
          // Provide the exact Price ID (for example, price_1234) of the product you want to sell
          // can update the price ID from stripe website or in our database, benefit of the website is that to update the price, just update from stripe website will be enough and that will be reflected in our database
          price: priceId,
          quantity: 1,
        },
      ],
      // mode: 'payment' means one time payment
      // mode: 'subscription' means recurring payment
      mode: 'subscription',

      // we can provide extra information about the subscription here as metadata, these are not exactly for stripe to use but for our own use
      // we will need the planId to update the users subscription after their payment is successful, in the success page
      metadata: { planId },

      success_url: `${origin}/plans/success?session_id={CHECKOUT_SESSION_ID}`,
    });
    return NextResponse.redirect(session.url, 303)
  } catch (err) {
    return NextResponse.json(
      { error: err.message },
      { status: err.statusCode || 500 }
    )
  }
}