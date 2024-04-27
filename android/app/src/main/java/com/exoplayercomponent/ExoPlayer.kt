import android.content.Context
import android.widget.FrameLayout
import androidx.media3.common.MediaItem
import androidx.media3.exoplayer.DefaultRenderersFactory
import androidx.media3.exoplayer.ExoPlayer
import androidx.media3.ui.AspectRatioFrameLayout
import androidx.media3.ui.PlayerView

@androidx.media3.common.util.UnstableApi class ExoPlayer(context: Context) : FrameLayout(context) {
    private val defaultRenderersFactory = DefaultRenderersFactory(context).apply {
        setExtensionRendererMode(DefaultRenderersFactory.EXTENSION_RENDERER_MODE_ON)
    }
    private val exoPlayer: ExoPlayer = ExoPlayer.Builder(getContext(), defaultRenderersFactory).build()

    init {
        addView(PlayerView(context).apply {
            player = exoPlayer
            setShowSubtitleButton(true)
            resizeMode = AspectRatioFrameLayout.RESIZE_MODE_FIT
        })
    }

    fun play(url: String) {
        exoPlayer.setMediaItem(MediaItem.fromUri(url))
        exoPlayer.prepare()
        exoPlayer.play()
    }
}