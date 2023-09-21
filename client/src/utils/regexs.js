function validateEmail(email) {
  const regex = /^[A-Za-z0-9+_.-]+@(.+)$/;
  return regex.test(email.trim());
}

function validatePassword(password) {
  const regex = /^.{6,}$/;
  return regex.test(password.trim());
}



export { validateEmail, validatePassword };
