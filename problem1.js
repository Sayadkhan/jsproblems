function calculateTax(income, expenses) {
  if (income > 0 && expenses > 0 && income > expenses) {
    const savings = income - expenses;

    const taxRate = 0.2;

    const tax = savings * taxRate;

    return tax;
  } else {
    return "Invalid Input";
  }
}
