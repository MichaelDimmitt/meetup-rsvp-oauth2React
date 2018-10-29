### Curious what node_modules your react scripts are using?
package-lock.json shows nodemodules used.

### Fun videos to watch:
Code splitting: https://www.youtube.com/watch?v=hqUiu4dKbBw
10kOrBust talk: https://www.youtube.com/watch?v=hqUiu4dKbBw
BeginnerGuidetoCodeSplitting(better at the end): https://www.youtube.com/watch?v=bb6RCrDaxhw

### Things, that I hope to achieve in this project:
1) Investigate "create react app scripts 2.0"
2) Ensure cra2.0 uses @babel/preset-env
3) Ensure cra2.0 uses transpile with babel twice by setting modules:false in babelrc~4) Ensure cra2.0 supports only browsers relavent to your users utilize.
4) Ensure cra2.0 supports only browsers relavent to your users.
6) Ensure cra2.0 uses babel7.0
7) Ensure cra2.0 uses loosemode
8) Ensure cra2.0 is gzipping your files for production.
9) Ensure cra2.0  doesnt ship SourceMaps for production.
10) SourceMaps, dont ship them.
11) CODE-SPLITTING, implement react-loadable (component based code splitting.)
12) Try to put all of this logic in a test suite.
13) Automatically upgrade cra and run test suite reporting results each time.
14) Investigate how to improve the milisecond delay when browser is translating javascript.
15) Conditional patterns for component code splitting where mobile is suported and upgrade for additional components for desktop users that require additional features.

## Measuring Success:
Keep bundle below 40 KB, realistically 50 KB

I would like to have react and a skeleton website for different entrypoints in the bundle.js they have to be gzipped to have it at that size. Additional javascript files get brought in with react-loadable code splitting for the rest of the project. Try to limit waterfalling to often in the network tab.

### Things achieved so far:
