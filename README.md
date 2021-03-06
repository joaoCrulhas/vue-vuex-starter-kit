# vue-vuex-starter-kit
Get started with Vue, Vuex, and Vue-router. Build app with webpack.

## Quick start
**Make sure you have Node version >= 6.0 and NPM >= 3**

```bash
# Clone project code 
git clone https://github.com/scopewu/vue-vuex-starter-kit.git

# goto dir
cd vue-vuex-starter-kit

# install with npm or yarn
npm install # yarn install

# start the develop server, use Hot Module Replace
npm start # yarn start
```
open page in your browser with [http://localhost:3000](http://localhost:3000) or [http://127.0.0.1:3000](http://127.0.0.1:3000)

of course you can change the port
```bash
# like use port 8080
# linux/os x
export PORT=8080 && npm start

#windows
set PORT=8080
```
### Css preprocessing
If you are using less/stylus/styl, you can add them to the project.

in `config/utils.js`
```javascript
function cssLoaders({sourceMap = false, extract = true}) {
  //code...

  // https://vue-loader.vuejs.org/en/configurations/extract-css.html
  // TODO: Maybe you use less/stylus/styl, you should install the module with npm
  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less'),
    sass: generateLoaders('sass'),
    scss: generateLoaders('sass'),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus')
  }
}
```
In the project root directory implementation `npm install`, install you need to use css tools.
e.g.
```bash
npm install --save-dev less-loader
```

## File Structure
We use component development in the project. Component development is an efficient development model and a good way to ensure maintainable code by encapsulating our behavioral logic.

```
.
├── config                   # Project and build configurations
├── public                   # Static public
├── server                   # Express server, build compile
├───├─bin                    # Build or Start server scripts
│   │  ├─ compile.js         # Compile static assets script
│   │  └─ www                # Start server
│   └── app.js               # Server application entry point
├── src                      # Application source code
│   ├── index.html           # Main HTML page container for app
│   ├── main.js              # Application bootstrap and rendering
│   ├── components           # Global Reusable Presentational Components
│   ├── layouts              # Components that dictate major page structure
│   │   └── MainLayout.vue   # main layout component for app
│   │   └── MainLayout.scss  # Styles of MainLayout component
│   │   └── index.js         # Main file for layout
│   ├── router               # VueRouter create
│   │   ├── index.js         # VueRouter Object script
│   │   ├── Home             # Fractal route
│   │   │   └── Home.vue     # Home Page component
│   │   └─── mores...
│   ├── store                # Vuex store
│   └── styles               # styles of app
└── mores...
```
## Build System
We are using `webpack` to develop vue applications. The webpack config is placed in the config folder, which also contains the application configuration.

### Globals
In the development environment, we can use the webpack's `DefinePlugin` plugin to set global variables

|Variable|Description|
|---|---|
|`process.env.NODE_ENV`|the active `NODE_ENV` when the build started|
|`__DEV__`|True when `process.env.NODE_ENV` is `development`|
|`__PROD__`|True when `process.env.NODE_ENV` is `production`|
|`__TEST__`|True when `process.env.NODE_ENV` is `test`|

### build files
```bash
# development
npm run deploy:dev # or yarn run deploy
# production
npm run deploy:prod # or yarn run deploy:prod
```

### Check server
If you have generated a static file for the project, we can run a suggested server to check if the app is running well.
```bash
# development
npm run server # or yarn run server
# production
npm run server:prod # or yarn run server:prod
```

## Features
- [vue](https://github.com/vuejs/vue)
- [vuex](https://github.com/vuejs/vuex)
- [vue-router](https://github.com/vuejs/vue-router)
- [webpack](https://github.com/webpack/webpack)
- [babel](https://github.com/babel/babel)
- [express](https://github.com/expressjs/express)

## License
[MIT](https://github.com/scopewu/vue-vuex-starter-kit/blob/master/LICENSE)
