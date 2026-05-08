import { NativeModule, requireNativeModule } from "expo";

declare class IsMutedModule extends NativeModule {
  isMuted(): Promise<boolean>;
}

export default requireNativeModule<IsMutedModule>("IsMuted");
