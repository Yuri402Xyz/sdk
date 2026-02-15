function validateInput(input) {
  if (!input || typeof input !== "string") {
    throw new Error("Invalid input");
  }
  return true;
}

module.exports = { validateInput };
