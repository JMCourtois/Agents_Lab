function roundCurrency(value) {
  return Math.round(value * 100) / 100;
}

function getDiscountedSubtotal(items, couponPercent = 0) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = subtotal * (couponPercent / 100);
  return roundCurrency(subtotal - discount);
}

function getOrderTotal(items, couponPercent = 0) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountedSubtotal = getDiscountedSubtotal(items, couponPercent);
  const shipping = subtotal >= 50 ? 0 : 6.99;

  return roundCurrency(discountedSubtotal + shipping);
}

module.exports = {
  getDiscountedSubtotal,
  getOrderTotal
};

