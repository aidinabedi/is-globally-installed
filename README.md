# is-globally-installed

Check if this package was installed globally by [NPM](https://www.npmjs.com/) or [Volta](https://volta.sh/) (other package managers are untested).

By using `is-globally-installed` as a dependency, your own package can determine if it was also installed globally or locally.


## Install

```sh
npm install is-globally-installed
```


## Usage

```js
import isGloballyInstalled from 'is-globally-installed';

// If `npm install your-package`
console.log(isGloballyInstalled); // => false

// If `npm install --global your-package`
console.log(isGloballyInstalled); // => true
```


## Why use this package over others?

Most other packages (like `is-global` or `is-installed-globally`) rely on checking the path of the installed package. This method doesn't work with tools like [Volta](https://volta.sh/) where global packages are not installed directly under NPM's [global prefix](https://docs.npmjs.com/cli/v10/commands/npm-prefix#global). Instead this package uses a simpler and more direct approach. It just checks for the environment variable `npm_config_global`, which is automatically defined by NPM (and Volta) when installed globally (during post-install). This approach has the added benefit of the package not having any dependencies.
