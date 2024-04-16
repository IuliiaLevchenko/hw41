function generateYears(input) {
  let numInput = parseInt(input); // Конвертація введення у число

  let suffix;
  if (numInput % 10 === 1 && numInput % 100 !== 11) {
    suffix = 'рік';
  } else if (numInput % 10 >= 2 && numInput % 10 <= 4 && !(numInput % 100 >= 12 && numInput % 100 <= 14)) {
    suffix = 'роки';
  } else {
    suffix = 'років';
  }

  document.body.innerHTML = `<p>${numInput} ${suffix}</p>`; // Вивід результату на сторінці
}