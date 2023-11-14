import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-is-muted' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

// @ts-expect-error
const isTurboModuleEnabled = global.__turboModuleProxy != null;

const IsMutedModule = isTurboModuleEnabled
  ? require('./NativeIsMuted').default
  : NativeModules.IsMuted;

const IsMuted = IsMutedModule
  ? IsMutedModule
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function isMuted(): Promise<Boolean> {
  return new Promise((resolve, reject) => {
    IsMuted.isMuted()
      .then((muted: boolean) => resolve(muted))
      .catch((error: any) => reject(error));
  });
}
