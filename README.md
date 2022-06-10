# react-native-is-muted

[![npm version](https://img.shields.io/npm/v/react-native-is-muted.svg)](https://www.npmjs.com/package/react-native-is-muted)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

<p align="center"><img src="https://github.com/NielsOtten/react-native-is-muted/blob/main/isMutedExample.ios.gif?raw=true" alt="Showcase iOS" width="234" height="433">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://github.com/NielsOtten/react-native-is-muted/blob/main/isMutedExample.android.gif?raw=true" alt="Showcase Android" width="234" height="433"></p>

Check if a device is muted.

## Installation

1. Install the library from `npm`
   ```sh
   npm install react-native-is-muted
   ```
2. Link native code
   React native 0.60+ (IOS only)

   ```sh
   cd ios && pod install # for iOS
   ```

   pre 0.60

   ```sh
   react-native link react-native-is-muted
   ```

3. (IOS only) Add MuteChecker.caf to buildpase "Copy Bundle Resources"
   1. Open your project in XCode
   2. Click on project name > Target > Build Phases > Copy Bundle Resources
   3. Click on the + icon
   4. Click on Add another...
      <p><img src="https://github.com/NielsOtten/react-native-is-muted/blob/main/Step4.png?raw=true" alt="Red circle around 'Add another...'" height="300"></p>
   5. Add MuteChecker.caf, located in nodemodules/react-native-is-muted/ios/
      <p><img src="https://github.com/NielsOtten/react-native-is-muted/blob/main/Step5.png?raw=true" alt="Location of mutechecker.caf"></p>
4. Done

## Usage

**Promise**

```js
import IsMuted from 'react-native-is-muted';

IsMuted()
  .then(muted => {
    console.log('Muted:', muted);
  })
  .catch(error => {
    console.error(error);
  });
```

**Async await**

```js
import IsMuted from 'react-native-is-muted';

try {
  const muted = await IsMuted();
  console.log('Muted: ', muted);
} catch (error) {
  console.error(error);
}
```
