import {useState, useEffect} from 'react';
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';

export default function App() {
  const [yPosition, setYPosition] = useState(null);

  useEffect(() => {
    console.log('yPosition => ', yPosition);
  }, [yPosition]);

  const handleLayout = event => {
    const layout = event.nativeEvent.layout;
    setYPosition(layout.y);
  };

  return (
    <View style={styles.container}>
      <Text>1</Text>
      {/* This is where we attach the onLayout prop */}
      <Text>3</Text>
      <Text onLayout={handleLayout}>2</Text>
      <StatusBar style='auto' />
      {yPosition !== null && <Text>Y Position of Text 2: {yPosition}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
