import IsMutedModule from "./IsMutedModule";

export function isMuted(): Promise<boolean> {
  return IsMutedModule.isMuted();
}

export default IsMutedModule;
