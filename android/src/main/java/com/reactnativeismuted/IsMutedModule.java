package com.nielsotten.rnismuted;

import android.content.Context;
import android.media.AudioManager;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;

public class IsMutedModule extends ReactContextBaseJavaModule {

    private final ReactApplicationContext context;

    public IsMutedModule(ReactApplicationContext context) {
        super(context);
        this.context = context;
    }

    @Override
    public String getName() {
        return "IsMuted";
    }

    @ReactMethod
    public void isMuted(Promise promise) {
        try {
            AudioManager audioManager = (AudioManager) context.getSystemService(Context.AUDIO_SERVICE);
            if (audioManager.getRingerMode() == AudioManager.RINGER_MODE_NORMAL)
                promise.resolve(false);
            else
                promise.resolve(true);
        } catch (Exception exception) {
            promise.reject(exception);
        }
    }
}
