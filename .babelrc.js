const output = process.env.BABEL_OUTPUT;
const modules = output == null ? false : output;

const options = {
  presets: [
    ['@babel/env', { loose: true, modules }], '@babel/react'
  ],
};

module.exports = options;
