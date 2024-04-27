import { StyleSheet, Text, View } from 'react-native';
import { ExoPlayer } from './ExoPlayer';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.ui}>
        <Text>Salut mec</Text>
      </View>
      <View style={styles.player}>
        <ExoPlayer url='https://cph-p2p-msl.akamaized.net/hls/live/2000341/test/master.m3u8' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ui: {
    position: 'absolute',
    zIndex: 1,
  },
  player: {
    zIndex: 0,
    width: '100%',
    height: '100%',
  }
});
