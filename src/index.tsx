import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-is-muted' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

const IsMutedNativeModule = NativeModules.IsMuted
  ? NativeModules.IsMuted
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function IsMuted(): Promise<Boolean> {
  return new Promise((resolve, reject) => {
    IsMutedNativeModule.isMuted()
      .then((muted: boolean) => resolve(muted))
      .catch((error: any) => reject(error));
  });
}