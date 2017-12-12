# svelte-loader

[![Build Status](https://travis-ci.org/esarbanis/svelte-preprocess-loader.svg?branch=master)](https://travis-ci.org/esarbanis/svelte-preprocess-loader)

A [webpack](https://webpack.js.org) loader for [svelte](https://svelte.technology) components preprocessing.


## Usage

Configure inside your `webpack.config.js`:

```javascript
  ...
  module: {
    rules: [
      ...
      {
        test: /\.(html|svelte)$/,
        exclude: /node_modules/,
        use: 'svelte-preprocess-loader'
      }
      ...
    ]
  }
  ...
```

Check out the [example project](./example).

## License

MIT
