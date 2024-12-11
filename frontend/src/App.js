import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import ShirtListScreen from './screens/ShirtListScreen';
import './global.css';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style='auto' />
      <SafeAreaView
        style={styles.container}
        className='w-full max-w-screen-sm mx-auto'
      >
        <ShirtListScreen />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
