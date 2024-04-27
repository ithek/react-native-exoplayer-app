import {StyleProp, ViewStyle, requireNativeComponent} from 'react-native';

export const ExoPlayerViewManager =
  requireNativeComponent<{ style: StyleProp<ViewStyle>, url: string }>('ExoPlayerViewManager');