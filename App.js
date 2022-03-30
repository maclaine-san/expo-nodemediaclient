import { StatusBar } from 'expo-status-bar';
import React, {useRef} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {  NodePlayerView } from 'react-native-nodemediaclient';

export default function App() {
  const vp = useRef()
  return (
    <View style={styles.container}>
      <Text>test</Text>
      <NodePlayerView 
        style={{ height: 500, width: 500 }}
        ref={vp}
        inputUrl={"rtmp://192.168.1.244/live/test"}
        scaleMode={"ScaleAspectFit"}
        bufferTime={300}
        maxBufferTime={1000}
        autoplay={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
