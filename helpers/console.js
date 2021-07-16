module.exports = {
  labelConsole: (str) => {
    let limiter = '';
    let char = '=';
    for (let i = 0; i < str.length + 4; i++) {
      limiter += char;
    }
    console.log(limiter);
    console.log(`${char}${char}${str}${char}${char}`);
    console.log(limiter);
  }
}