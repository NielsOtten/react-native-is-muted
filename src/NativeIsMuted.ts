import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  isMuted(): Promise<boolean>;
}

export default TurboModuleRegistry.getEnforcing<Spec>('IsMuted');
