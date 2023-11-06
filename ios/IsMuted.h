
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNIsMutedSpec.h"

@interface IsMuted : NSObject <NativeIsMutedSpec>
#else
#import <React/RCTBridgeModule.h>

@interface IsMuted : NSObject <RCTBridgeModule>
#endif

@end
