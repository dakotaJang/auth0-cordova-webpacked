# auth0-cordova-webpacked
If using ```Import``` statement or using ```RequireJS``` is not an option.

## src
The source code just use the ```require``` statement built into node.js to define the variables globally in ```window```.

## webpack.config.js
Configure the ```entry``` and ```output``` properties in ```webpack.config.js``` appropriately to package each javascript files.

When ready, run the following command.
```
  npm run webpack
```

## dist
Your ouput file should be found in ```dist``` folder after you run the webpack command.

## Possible Improvements
- The configuration must be done manually to each modules that you want to package. It would be easier if we can just use one entry point to package multiple modules.