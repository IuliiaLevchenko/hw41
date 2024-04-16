function generateYears(input) {
  let result = [];
  for (let i = 1; i <= 1000; i++) {
    if (i % 10 === 1 && !(i === 11 || i === 111)) {
      result.push(`${i} рік`);
    } else if (
      (i % 10 === 2 || i % 10 === 3 || i % 10 === 4) &&
      !(i >= 12 && i <= 14)
    ) {
      result.push(`${i} роки`);
    } else {
      result.push(`${i} років`);
    }
  }

  if (validateInput(input)) {
    // Now check if the input matches any of the generated years.
    let matchingYear = result.find((year) => year.startsWith(input));
    if (matchingYear) {
      console.log("Input matches a generated year:", matchingYear);
    } else {
      console.log("Input does not match any generated year.");
    }
  } else {
    console.log("Invalid input. Please enter a positive number.");
  }
}
