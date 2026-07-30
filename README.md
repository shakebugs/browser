# Shake Web SDK

[![npm version](https://badge.fury.io/js/@shakebugs%2Fbrowser.svg)](https://www.npmjs.com/package/@shakebugs/browser)

Browser plugin for [bug reporting](https://www.shakebugs.com).

## Features

|     Feature     | Available |
| :-------------: | :-------: |
|  Bug reporting  |    ✅     |
| Crash reporting |    ❌     |
|      Users      |    ✅     |

## How to use

### NPM

### 1. Install Shake

Execute the npm install command in your terminal:

```bash
npm install @shakebugs/browser
```

### 2. Start Shake

Once installed, you can start using the library by calling `Shake.start()` at the top level of your app

```javascript
// Import the library if using ES6 modules
import Shake from '@shakebugs/browser';

Shake.start('app-api-key');
```

Replace `app-api-key` with the actual value you have in your app settings on dashboard.

Optionally, pass your app version as the second argument. Web apps don't have a built-in versioning system, so Shake can't detect it automatically — it defaults to `"1.0.0"` if you don't pass one.

```javascript
Shake.start('app-api-key', '1.0.0');
```

### CDN

Alternatively, library can be added to your project through CDN. Bundle is delivered through JSDelivr CDN.

### 1. Install Shake

Add the following script to your code:

```html
<script type="module">
    import Shake from 'https://cdn.jsdelivr.net/npm/@shakebugs/browser@latest/+esm';
	window.Shake = Shake;
</script>
```

### 2. Start Shake

Once installed, you can start using the library by calling `Shake.start()` at the top level of your app

```html
<body>
	<script>
        window.Shake.start('app-api-key');
	</script>
</body>
```

Replace `app-api-key` with the actual value you have in your app settings on dashboard.

Optionally, pass your app version as the second argument. Web apps don't have a built-in versioning system, so Shake can't detect it automatically — it defaults to `"1.0.0"` if you don't pass one.

```html
<body>
	<script>
        window.Shake.start('app-api-key', '1.0.0');
	</script>
</body>
```

## Resources

- [Official docs](https://www.shakebugs.com/docs/)
