// tailwind.config.js
module.exports = {
  content: process.env.LIB ? ["./src/lib/**/*.jsx"] : ["./src/app/**/*.jsx"],
}
