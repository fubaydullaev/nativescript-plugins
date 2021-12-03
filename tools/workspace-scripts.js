const npsUtils = require('nps-utils');

module.exports = {
	message: 'NativeScript Plugins ~ made with ❤️  Choose a command to start...',
	pageSize: 32,
	scripts: {
		default: 'nps-i',
		nx: {
			script: 'nx',
			description: 'Execute any command with the @nrwl/cli',
		},
		format: {
			script: 'nx format:write',
			description: 'Format source code of the entire workspace (auto-run on precommit hook)',
		},
		'🔧': {
			script: `npx cowsay "NativeScript plugin demos make developers 😊"`,
			description: '_____________  Apps to demo plugins with  _____________',
		},
		// demos
		apps: {
			'...Vanilla...': {
				script: `npx cowsay "Nothing wrong with vanilla 🍦"`,
				description: ` 🔻 Vanilla`,
			},
			demo: {
				clean: {
					script: 'nx run demo:clean',
					description: '⚆  Clean  🧹',
				},
				ios: {
					script: 'nx run demo:ios',
					description: '⚆  Run iOS  ',
				},
				android: {
					script: 'nx run demo:android',
					description: '⚆  Run Android  🤖',
				},
			},
			'...Angular...': {
				script: `npx cowsay "Test all the Angles!"`,
				description: ` 🔻 Angular`,
			},
			'demo-angular': {
				clean: {
					script: 'nx run demo-angular:clean',
					description: '⚆  Clean  🧹',
				},
				ios: {
					script: 'nx run demo-angular:ios',
					description: '⚆  Run iOS  ',
				},
				android: {
					script: 'nx run demo-angular:android',
					description: '⚆  Run Android  🤖',
				},
			},
			'...React...': {
				script: `npx cowsay "Nothing wrong with React, either ⚛️"`,
				description: ` 🔻 React`,
			},
			'demo-react': {
				clean: {
					script: 'nx run demo-react:clean',
					description: '⚆  Clean  🧹',
				},
				ios: {
					script: 'nx run demo-react:ios',
					description: '⚆  Run iOS  ',
				},
				android: {
					script: 'nx run demo-react:android',
					description: '⚆  Run Android  🤖',
				},
			},
			'...Vue...': {
				script: `npx cowsay "What a nice Vue"`,
				description: ` 🔻 Vue`,
			},
			'demo-vue': {
				clean: {
					script: 'nx run demo-vue:clean',
					description: '⚆  Clean  🧹',
				},
				ios: {
					script: 'nx run demo-vue:ios',
					description: '⚆  Run iOS  ',
				},
				android: {
					script: 'nx run demo-vue:android',
					description: '⚆  Run Android  🤖',
				},
			},
		},
		'⚙️': {
			script: `npx cowsay "@fubaydullaev/* packages will keep your ⚙️ cranking"`,
			description: '_____________  @fubaydullaev/*  _____________',
		},
		// packages
		// build output is always in dist/packages
		'@fubaydullaev': {
			// @fubaydullaev/nativescript-epub-folio
			'nativescript-epub-folio': {
				build: {
					script: 'nx run nativescript-epub-folio:build.all',
					description: '@fubaydullaev/nativescript-epub-folio: Build',
				},
			},
			'build-all': {
				script: 'nx run all:build',
				description: 'Build all packages',
			},
		},
		'⚡': {
			script: `npx cowsay "Focus only on source you care about for efficiency ⚡"`,
			description: '_____________  Focus (VS Code supported)  _____________',
		},
		focus: {
			'nativescript-epub-folio': {
				script: 'nx run nativescript-epub-folio:focus',
				description: 'Focus on @fubaydullaev/nativescript-epub-folio',
			},
			reset: {
				script: 'nx run all:focus',
				description: 'Reset Focus',
			},
		},
		'.....................': {
			script: `npx cowsay "That's all for now folks ~"`,
			description: '.....................',
		},
	},
};
