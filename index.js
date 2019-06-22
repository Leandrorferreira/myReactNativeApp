/**
 * @format
 */

import {AppRegistry} from 'react-native';
//Busca o index da pasta src
import App from './src';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
