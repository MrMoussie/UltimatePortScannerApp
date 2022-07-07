import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LanPortScanner from 'react-native-lan-port-scanner';

function isPortOpen(port) {
    let result = LanPortScanner.scanHost('192.168.1.1', port, 1000);
    return result;
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Test</Text>
      <Text>${isPortOpen(80)}</Text>
      <StatusBar style="auto" />
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
