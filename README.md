# svelte-preprocess-loader

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
        use: {
          loader: 'svelte-preprocess-loader',
          options: {
            markup: ({ content }) => {
                // `content` is the entire component string
                return { code: '...', map: {...} };
            },
        
            style: ({ content, attributes }) => {
                // `content` is what's inside the <style> element, if present
                // `attributes` is a map of attributes on the element
                if (attributes.type !== 'text/scss') return;
                return { code: '...', map: {...} };
            },
        
            script: ({ content, attributes }) => {
                // `content` is what's inside the <script> element, if present
                // `attributes` is a map of attributes on the element
                if (attributes.type !== 'text/coffeescript') return;
                return { code: '...', map: {...} };
            }
          }
        }
      }
      ...
    ]
  }
  ...
```

## License

MIT
