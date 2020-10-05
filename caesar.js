function decode(string, amount) {

  return string
    .split("")
    .map((e) =>
      /[a-zA-Z]/.test(e)
        ? String.fromCharCode(
            e.charCodeAt(0) + (amount % 26) > (/[A-Z]/.test(e) ? 90 : 122)
              ? (/[A-Z]/.test(e) ? 64 : 96) +
                  ((e.charCodeAt() + (amount % 26)) %
                    (/[A-Z]/.test(e) ? 90 : 122))
              : e.charCodeAt() + (amount % 26)
          )
        : e
    )
    .join("");
}

function encode(string, amount) {
    if(amount  < 0 ) {
        process.stderr.write('Число не может быть меньше нуля')
        process.exit(25)
    }
  return string
    .split("")
    .map((e) =>
      /[a-zA-Z]/.test(e)
        ? String.fromCharCode(
          e.charCodeAt(0) - (amount % 26) < (/[A-Z]/.test(e) ? 65 : 97)
              ? (/[A-Z]/.test(e) ? 91 : 123) -
              ((/[A-Z]/.test(e) ? 65 : 97) - (e.charCodeAt(0) - (amount % 26)))
              : e.charCodeAt() - (amount % 26)
          )
        : e
    )
    .join("");
}


module.exports = {
  encode,
  decode,
};
