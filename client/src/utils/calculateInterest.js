export default function calculateInterest(totalTickets, soldTickets) {
  var soldTicketInterest = (soldTickets / totalTickets) * 100;
  return Math.round(soldTicketInterest);
}
function removeDecimalPart(number) {
  // Convert the number to a string
  var numberString = number.toString();

  // Use split to remove the decimal part if it exists
  var parts = numberString.split(".");

  // If there is a decimal part, return only the integer part
  if (parts.length > 1) {
    return parts[0];
  } else {
    // If there is no decimal part, or the input is not a valid number, return the same number
    return numberString;
  }
}
