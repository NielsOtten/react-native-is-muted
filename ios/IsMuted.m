#import "IsMuted.h"
#import "MuteChecker.h"

@interface IsMuted ()

@property (nonatomic, strong) MuteChecker *muteChecker;

@end

@implementation IsMuted
RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(isMuted:(RCTPromiseResolveBlock)resolve
                  reject:(RCTPromiseRejectBlock)reject)
{
    #if TARGET_IPHONE_SIMULATOR
        reject(@"isMuted", @"The simulator currently doesn't support react-native-is-muted.", [NSError errorWithDomain:@"SimulatorNotSupported" code:0 userInfo:@{}]);
        return;
    #endif

    self.muteChecker = [[MuteChecker alloc] initWithCompletionBlk:^(BOOL muted) {
        resolve(muted ? @TRUE : @FALSE);
    }];

    @try {
        [_muteChecker check];
    }
    @catch (NSException *e) {
        reject(@"isMuted", @"Error occured when checking is muted.", [NSError errorWithDomain:e.name code:0 userInfo:@{
        NSUnderlyingErrorKey: e,
        NSDebugDescriptionErrorKey: e.userInfo ?: @{ },
        NSLocalizedFailureReasonErrorKey: (e.reason ?: @"???") }]);
    }
}

// Don't compile this code when we build for the old architecture.
#ifdef RCT_NEW_ARCH_ENABLED
- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
    return std::make_shared<facebook::react::NativeIsMutedSpecJSI>(params);
}
#endif

@end
