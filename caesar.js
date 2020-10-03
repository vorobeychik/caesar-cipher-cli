function decode(string, amount) {
  return string
    .split("")
    .map((e) =>
      /[a-zA-Z]/.test(e)
        ? String.fromCharCode(
            e.charCodeAt(0) + (amount % 25) > (/[A-Z]/.test(e) ? 90 : 122)
              ? (/[A-Z]/.test(e) ? 64 : 96) +
                  ((e.charCodeAt() + (amount % 25)) %
                    (/[A-Z]/.test(e) ? 90 : 122))
              : e.charCodeAt() + (amount % 25)
          )
        : e
    )
    .join("");
}

function encode(string, amount) {
  return string
    .split("")
    .map((e) =>
      /[a-zA-Z]/.test(e)
        ? String.fromCharCode(
          e.charCodeAt(0) - (amount % 25) < (/[A-Z]/.test(e) ? 65 : 97)
              ? (/[A-Z]/.test(e) ? 91 : 123) -
              ((/[A-Z]/.test(e) ? 65 : 97) - (e.charCodeAt(0) - (amount % 25)))
              : e.charCodeAt() - (amount % 25)
          )
        : e
    )
    .join("");
}

module.exports = {
  encode,
  decode,
};
