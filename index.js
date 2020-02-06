import { NativeModules } from 'react-native';

const { IsMuted } = NativeModules;

export default () =>
  new Promise((resolve, reject) => {
    IsMuted.isMuted()
      .then(muted => resolve(muted == true))
      .catch(error => reject(error));
  });
