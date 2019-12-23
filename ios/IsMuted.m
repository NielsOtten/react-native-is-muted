#import "IsMuted.h"
#import "MuteChecker.h"

@interface IsMuted ()

@property (nonatomic, strong) MuteChecker *muteChecker;

@end

@implementation IsMuted

RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(sampleMethod:(NSString *)stringArgument numberParameter:(nonnull NSNumber *)numberArgument callback:(RCTResponseSenderBlock)callback)
{
    NSLog(@"HET WERKT 2");
    self.muteChecker = [[MuteChecker alloc] initWithCompletionBlk:^(NSTimeInterval lapse, BOOL muted) {
        NSLog(@"lapsed: %f", lapse);
        NSLog(@"muted: %d", muted);
        callback(@[[NSString stringWithFormat: @"numberArgument: %@ stringArgument: %@", numberArgument, stringArgument]]);
    }];
    
    [_muteChecker check];
}

@end
