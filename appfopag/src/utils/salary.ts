function calcInnsDiscount(bruteSalary: number) {
  var discount = 0;
  bruteSalary < 1500.0
    ? (discount = 0.1)
    : bruteSalary >= 1500.0 && bruteSalary < 4000.0
    ? (discount = 0.12)
    : bruteSalary >= 4000.0 && bruteSalary < 6000.0
    ? (discount = 0.14)
    : (discount = 0.15);

  return discount;
}

function calcIrsDiscount(bruteSalary: number) {
  return bruteSalary * 0.1;
}

export const salaryUtils = { calcInnsDiscount, calcIrsDiscount };
