const test = require("node:test");
const assert = require("node:assert/strict");

const { getDiscountedSubtotal, getOrderTotal } = require("../src/cart");

test("keeps free shipping when discounted subtotal is still at least 50", () => {
  const items = [
    { price: 30, quantity: 1 },
    { price: 25, quantity: 1 }
  ];

  assert.equal(getDiscountedSubtotal(items, 5), 52.25);
  assert.equal(getOrderTotal(items, 5), 52.25);
});

test("charges shipping when discount drops subtotal below free shipping threshold", () => {
  const items = [
    { price: 30, quantity: 1 },
    { price: 24, quantity: 1 }
  ];

  assert.equal(getDiscountedSubtotal(items, 10), 48.6);
  assert.equal(getOrderTotal(items, 10), 55.59);
});

