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

### NPM

If using npm, execute the npm install command in your terminal:

```bash
npm install @shakebugs/browser
```

### Script tag

Alternatively, you can include this library directly into your HTML file using a script tag:

```html
<script type="module">
	import Shake from 'https://cdn.jsdelivr.net/npm/@shakebugs/browser@latest/+esm';
	window.Shake = Shake;
</script>
```

### Start Shake

Once installed, you can start using the library by including it in your JavaScript files or directly within your HTML.

Call `Shake.start()` at the top level of your app

#### Example usage in Javascript

```javascript
// Import the library if using ES6 modules
import Shake from '@shakebugs/browser';

Shake.start('client-id', 'client-secret');
```

#### Example usage in HTML

```html
<body>
	<script>
		window.Shake.start('client-id', 'client-secret');
	</script>
</body>
```

Replace `client-id` and `client-secret` with the actual values you have in [your workspace settings](https://app.shakebugs.com/settings/workspace#general).

## Resources

- [Official docs](https://www.shakebugs.com/docs/)
