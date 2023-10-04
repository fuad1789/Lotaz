export default function formatNumber(number) {
  if (Number.isInteger(number)) {
    return number.toFixed(2);
  }

  // Eğer sayı ondalık ise, olduğu gibi döndürür.
  return number;
}
