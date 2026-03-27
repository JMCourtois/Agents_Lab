# Bug Report

Support reported that some orders are getting free shipping when a coupon should push them below the free-shipping threshold.

Expected behavior:

- Free shipping should be based on the discounted subtotal.

Observed example:

- Items subtotal: `54.00`
- Coupon: `10%`
- Discounted subtotal: `48.60`
- Shipping should apply

Current behavior:

- Shipping is not charged.

