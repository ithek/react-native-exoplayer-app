package com.exoplayercomponent

import androidx.annotation.OptIn
import androidx.media3.common.util.UnstableApi
import com.facebook.react.ReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext

class ExoPlayerPackage : ReactPackage {
    override fun createNativeModules(p0: ReactApplicationContext): MutableList<NativeModule> = emptyList<NativeModule>().toMutableList()

    @OptIn(UnstableApi::class) override fun createViewManagers(
            reactContext: ReactApplicationContext
    ) = listOf(ExoPlayerViewManager(reactContext))
}