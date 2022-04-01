export const handleSumtotal = () => {
  const reducer = (accumulator, currentValue) =>
    accumulator + currentValue.price * currentValue.qty;
  const sum = cart.reduce(reducer, 0);
  return sum;
};
