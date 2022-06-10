#import "IsMuted.h"
#import "MuteChecker.h"
@interface IsMuted ()

@property (nonatomic, strong) MuteChecker *muteChecker;

@end

@implementation IsMuted

RCT_EXPORT_MODULE()

// Example method
// See // https://reactnative.dev/docs/native-modules-ios
RCT_REMAP_METHOD(isMuted,
                 withResolver:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)
{
  #if TARGET_IPHONE_SIMULATOR
        reject(@"isMuted", @"The simulator currently doesn't support react-native-is-muted.", [NSError errorWithDomain:@"SimulatorNotSupported" code:0 userInfo:@{}]);
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

@end
