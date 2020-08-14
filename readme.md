# Minification benchmarks

### lodash
- **File** `node_modules/lodash/lodash.js`
- **Size** `529.85 KB`
- **Gzip size** `94.54 KB`

| Minifier             |                  Size |             Gzip size |         Time |
| :------------------- | --------------------: | --------------------: | -----------: |
| terser - default     |     `71.6 KB` (`13%`) | 🏆 `24.47 KB` (`25%`) |   `969.34ms` |
| terser - no compress |    `74.01 KB` (`13%`) |    `25.64 KB` (`27%`) |   `334.96ms` |
| esbuild              | 🏆 `70.31 KB` (`13%`) |    `25.81 KB` (`27%`) | 🏆 `28.00ms` |

### vue/dist/vue.runtime.common.dev
- **File** `node_modules/vue/dist/vue.runtime.common.dev.js`
- **Size** `217.93 KB`
- **Gzip size** `60.81 KB`

| Minifier             |                  Size |             Gzip size |         Time |
| :------------------- | --------------------: | --------------------: | -----------: |
| terser - default     | 🏆 `92.77 KB` (`42%`) | 🏆 `30.59 KB` (`50%`) |   `480.07ms` |
| terser - no compress |    `98.89 KB` (`45%`) |     `31.4 KB` (`51%`) |   `191.67ms` |
| esbuild              |    `93.43 KB` (`42%`) |    `31.28 KB` (`51%`) | 🏆 `28.36ms` |

### react/cjs/react.development.js
- **File** `node_modules/react/cjs/react.development.js`
- **Size** `59.22 KB`
- **Gzip size** `16.1 KB`

| Minifier             |                  Size |            Gzip size |         Time |
| :------------------- | --------------------: | -------------------: | -----------: |
| terser - default     | 🏆 `19.11 KB` (`32%`) | 🏆 `6.99 KB` (`43%`) |   `149.87ms` |
| terser - no compress |    `20.71 KB` (`34%`) |    `7.34 KB` (`45%`) |    `45.33ms` |
| esbuild              |    `19.72 KB` (`33%`) |    `7.21 KB` (`44%`) | 🏆 `10.16ms` |

### moment
- **File** `node_modules/moment/moment.js`
- **Size** `169.75 KB`
- **Gzip size** `35.7 KB`

| Minifier             |                 Size |             Gzip size |         Time |
| :------------------- | -------------------: | --------------------: | -----------: |
| terser - default     | 🏆 `57.8 KB` (`34%`) | 🏆 `18.24 KB` (`51%`) |   `386.72ms` |
| terser - no compress |   `61.79 KB` (`36%`) |    `19.25 KB` (`53%`) |   `142.12ms` |
| esbuild              |   `58.78 KB` (`34%`) |    `19.05 KB` (`53%`) | 🏆 `19.07ms` |

### terser
- **File** `node_modules/terser/dist/bundle.min.js`
- **Size** `778.21 KB`
- **Gzip size** `155.79 KB`

| Minifier             |                  Size |              Gzip size |         Time |
| :------------------- | --------------------: | ---------------------: | -----------: |
| terser - default     | 🏆 `355.1 KB` (`45%`) | 🏆 `101.15 KB` (`64%`) |  `1595.49ms` |
| terser - no compress |   `367.96 KB` (`47%`) |    `101.82 KB` (`65%`) |   `604.67ms` |
| esbuild              |   `357.53 KB` (`45%`) |    `104.22 KB` (`66%`) | 🏆 `57.70ms` |
