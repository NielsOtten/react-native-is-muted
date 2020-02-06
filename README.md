# react-native-is-muted

[![npm version](https://img.shields.io/npm/v/react-native-is-muted.svg)](https://www.npmjs.com/package/react-native-is-muted)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

<p align="center"><img src="https://github.com/nylsoo/react-native-is-muted/blob/master/isMutedExample.ios.gif?raw=true" alt="Showcase iOS" width="234" height="433">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://github.com/nylsoo/react-native-is-muted/blob/master/isMutedExample.android.gif?raw=true" alt="Showcase Android" width="234" height="433"></p>

Check if a device is muted.

## Installation

1. Install the library from ``npm``
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
   4. Click on Add another
<img src="https://github.com/nylsoo/react-native-is-muted/blob/master/Step4.png?raw=true" alt="Showcase iOS" width="234" height="433">
   5. Add MuteChecker.caf, located in nodemodules/react-native-is-muted/ios/
<img src="https://github.com/nylsoo/react-native-is-muted/blob/master/Step5.png?raw=true" alt="Showcase iOS" width="234" height="433">
4. Done

## Usage
Coming soon

## Trouble shooting
Coming soon