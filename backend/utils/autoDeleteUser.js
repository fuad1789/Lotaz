const User = require("../models/auth.js");

async function startVerificationTimer(email) {
  try {
    const user = new Date(await User.findOne({ email }));
    let notVerifiedSec = 0;

    const timeout = setTimeout(() => {
      notVerifiedSec++;
    }, 1000);

    if (notVerifiedSec == 240) {
      clearTimeout(timeout)
      if (!user.verified) {
        await User.deleteOne({ email });
      }
    }
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = { startVerificationTimer };
