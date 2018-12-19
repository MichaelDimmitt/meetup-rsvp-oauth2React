## Create React App less that 43KB without ejecting.
This would have been the case by default if the files were being gzip-ped. Currently not occuring.

## Next Deliverables,
~1) react loadable implementation.~
~2) react router implementation.~
~3) implement material-ui~
~4) remove material-ui~
~5) add tachyonss css~
6) implement redux

## thanks to @meup
for getting react with redux working for the meetup.com oauth2 requests.
https://www.github.com/epoch/meup

### Curious what node_modules your react scripts are using?
`package-lock.json` shows nodemodules used.

### Fun videos to watch:
Code splitting: https://www.youtube.com/watch?v=hqUiu4dKbBw
<br/>10kOrBust talk: https://www.youtube.com/watch?v=hqUiu4dKbBw
<br/>BeginnerGuidetoCodeSplitting(better at the end): https://www.youtube.com/watch?v=bb6RCrDaxhw

### Things, that I hope to achieve in this project:
1) Investigate "create react app scripts 2.0"
<br/>~2) Ensure cra2.0 uses @babel/preset-env~
<br/>~3) Ensure cra2.0 uses transpile with babel twice by setting modules:false in babelrc~
<br/>~4) Ensure cra2.0 supports only browsers relavent to your users utilize.~
<br/>~5) Ensure cra2.0 supports only browsers relavent to your users.~
<br/>~6) Ensure cra2.0 uses babel7.0~
<br/>~7) Ensure cra2.0 uses loosemode~
8) Ensure cra2.0 is gzipping your files for production. *Currently is not but implemented a workaround*
9) Ensure cra2.0  doesnt ship SourceMaps for production.*Dont believe it does but see num10*
<br/>~10) SourceMaps, dont ship them. *Regardless, I manually remove in the workaround. script alternate*~
11) CODE-SPLITTING, implement react-loadable (component based code splitting.)
12) Try to put all of this logic in a test suite.
13) Automatically upgrade cra and run test suite reporting results each time.
14) Investigate how to improve the milisecond delay when browser is translating javascript.
15) Conditional patterns for component code splitting where mobile is suported and upgrade for additional components for desktop users that require additional features.

## Measuring Success:
Keep bundle below 40 KB, realistically 50 KB

I would like to have react and a skeleton website for different entrypoints in the bundle.js they have to be gzipped to have it at that size. Additional javascript files get brought in with react-loadable code splitting for the rest of the project. Try to limit waterfalling to often in the network tab.

** Having manually gzip'ed the files **
<br/>Oct29: manually gzip'ing files is required to get the javascript this small.
<br/>Current achived bundle.js or chunk.js size is 35.1 KB.

Another measurement to keep in mind is the overall size of data transfered on the network tab when on an incognito window with cache disabled. Currently 38.3 KB.
** Having manually gzip'ed the files **

### Things achieved so far:
1) Verified, cra2.0 is using @babel/preset-env and compiling twice by using modules:false
<br/>[here at master](https://github.com/facebook/create-react-app/blob/master/packages/babel-preset-react-app/create.js#L73) or [here_prev_commit](https://github.com/facebook/create-react-app/blob/1d4fdc2dd4950011beacf1883900bf5d8da7079e/packages/babel-preset-react-app/index.js#L59)
2) Verified, supports only browsers relavent to your users. the package.json allows you to put your own config using
<br/>[browserslist](https://github.com/browserslist/browserslist)
3) Verified, cra2.0 *is NOT* gzipping by default. links: [gzipissue1](https://github.com/facebook/create-react-app/issues/1908#issuecomment-295497575) [gzipissue2](https://github.com/zeit/serve/issues/460)
4) Made a workaround for gzipping production, which is the alternative script in the package.json.
5) Verified, cra2.0 is using loosemode [here at master](https://github.com/facebook/create-react-app/blob/master/packages/babel-preset-react-app/create.js#L124) or [here at the pr](https://github.com/tvalentius/create-react-app/pull/24)


