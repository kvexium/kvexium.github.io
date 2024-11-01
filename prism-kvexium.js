Prism.languages["kvexium"] = Prism.languages.extend("clike", {
  comment: /(?:\/\/.*|\/\*[\s\S]*?\*\/)/,
  string: {
    pattern: [
      /(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/,
      /(^|[^\\])'(?:\\.|[^'\\\r\n]){1,6}'/,
    ],
    lookbehind: true,
    greedy: true,
  },
  // char: /'(?:\\.|[^'\\\r\n]){1,6}'/,
  keyword:
    /\b(?:(\*(\*)?|&)?dec|if|else|for|while|switch|return|uses\s(lib|git|ext)?|struct|type)\b/,
  buildin: /(?:(?:i|u)(?:8|16|32|64)|(?:f|v)(?:32|64)|char|str|bool)\b/,
  function: /(?:emitln|emitfln|[a-zA-Z_][a-zA-Z\d]*)\b(?=(\s)?\()/,
  boolean: /\b(?:_|false|null|true)\b/,
  number: [
    // binary
    /\b#[01]b([01]{4})+(\.([01]{4})+f)?\b/i,
    // octal
    /\b#[01]o([0-7]{2})+(\.([0-7]{2})+f)?\b/i,
    // hexadecimal
    /\b#[01]x[\da-f]+(\.([\da-f])+f)?\b/i,
    // decimal
    /\b[-+]?\d+(\.\d+f)\b/i,
  ],
  operator:
    /(?:\+(\+|=)?|-[-=]?|\*{1,2}(?!dec)|\*=|&&|[<>]=|=[=>]?|:=|\|\|?|[?:]>|>-|:)/,
  punctuation: /[{}[\];(),.:<>]/,
  annotation: /@(?:Limit|NoUse|Just|Docs|Debug|Type)/,
});
