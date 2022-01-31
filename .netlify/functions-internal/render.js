const { init } = require('../handler.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["img/headshot.jpeg","svg/github.svg","svg/linkedin.svg","svg/spotify.svg","theme/dark.css","theme/light.css"]),
	_: {
		mime: {".jpeg":"image/jpeg",".svg":"image/svg+xml",".css":"text/css"},
		entry: {"file":"start-86758c05.js","js":["start-86758c05.js","chunks/vendor-450bc166.js"],"css":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js')),
			() => Promise.resolve().then(() => require('../server/nodes/4.js')),
			() => Promise.resolve().then(() => require('../server/nodes/5.js'))
		],
		routes: [
			{
				type: 'page',
				pattern: /^\/experiences\/?$/,
				params: null,
				path: "/experiences",
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/projects\/?$/,
				params: null,
				path: "/projects",
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/etc\/?$/,
				params: null,
				path: "/etc",
				a: [0,4],
				b: [1]
			}
		]
	}
});
