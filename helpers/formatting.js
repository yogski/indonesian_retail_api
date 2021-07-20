module.exports = {
  allCapital: (str) => {
    return str.toUpperCase();
  },
  generateRandomFilename: () => {
    let d = new Date();
    return `${Number(d).toString(16)}`;
  }
}