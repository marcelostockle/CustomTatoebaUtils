const PrefixSymbols = /^[()[\]<>"¡!¿%#?.,;]+/g
const SuffixSymbols = /[()[\]<>"¡!¿%#?.,;]+$/g
const MidContent = /[^()[\]<>"¡!¿%#?.,;]+/g

module.exports = {
  PrefixSymbols,
  SuffixSymbols,
  MidContent
}