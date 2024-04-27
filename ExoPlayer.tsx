import React, {useEffect, useRef} from 'react';
import {
  PixelRatio,
  UIManager,
  findNodeHandle,
  Dimensions,
} from 'react-native';

import {ExoPlayerViewManager} from './ExoPlayerViewManager';

const createFragment = viewId =>
  UIManager.dispatchViewManagerCommand(
    viewId,
    // we are calling the 'create' command
    // @ts-ignore
    UIManager.ExoPlayerViewManager.Commands.create.toString(),
    [viewId],
  );

export const ExoPlayer = ({ url }: { url: string }) => {
  const ref = useRef(null);

  useEffect(() => {
    const viewId = findNodeHandle(ref.current);
    createFragment(viewId);
  }, []);

  return (
    <ExoPlayerViewManager
      style={{
        height: PixelRatio.getPixelSizeForLayoutSize(Dimensions.get('window').height),
        width: PixelRatio.getPixelSizeForLayoutSize(Dimensions.get('window').width),
      }}
      url={url}
      ref={ref}
    />
  );
};