// src/prism/kvexium.js

Prism.languages['kvexium'] = {
    'comment': /\/\/.*/,
    'string': /"(?:\\.|[^"\\])*"/,
    'keyword': /\b(?:dec|if|else|for|while|switch|case|default|return|uses|impl|ext)\b/,
    'type': /\b(?:i8|i16|i32|ntype|char|string|Dictionary)\b/,
    'function': /\b(?:getValueAt|getValueError|Math.log)\b/,
    'number': /\b\d+\b/,
    'operator': /[-+/*=<>!|&?]/,
    'punctuation': /[{}[\];(),.:]/,
    'symbol': /[\*\^\**]/,
    'variable': /(?:[a-zA-Z_][a-zA-Z0-9_]*)(?=\s*:=)/,
    'type-modifier': /[\*\^]/,
    'lambda': /&\(/,
  };  