# Shake Web SDK

[![npm version](https://badge.fury.io/js/@shakebugs%2Fbrowser.svg)](https://www.npmjs.com/package/@shakebugs/browser)

Browser plugin for [bug reporting](https://www.shakebugs.com).

## Features

|     Feature     | Available |
| :-------------: | :-------: |
|  Bug reporting  |    ✅     |
| Crash reporting |    ❌     |
|      Users      |    ❌     |

## How to use

### Install Shake

Execute the npm install command in your terminal:

```bash
npm install @shakebugs/browser
```

### Start Shake

Call `Shake.start()` method in the _index.js_ file.

```javascript title="index.js"
import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
import Shake from '@shakebugs/browser';

Shake.start('client-id', 'client-secret');
```

Replace `client-id` and `client-secret` with the actual values you have in [your workspace settings](https://app.shakebugs.com/settings/workspace#general).

## Resources

- [Official docs](https://www.shakebugs.com/docs/)
