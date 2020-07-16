/**
 * @format
 */

import { AppRegistry, Platform, UIManager } from 'react-native';
import App from './src/views/App';

if (Platform.OS === 'android') UIManager.setLayoutAnimationEnabledExperimental(true);

console.disableYellowBox = true;

AppRegistry.registerComponent('proje3', () => App);
