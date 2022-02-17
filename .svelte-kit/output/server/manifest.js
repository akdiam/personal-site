export const manifest = {
	appDir: "_app",
	assets: new Set(["img/headshot.jpeg","svg/fclef.svg","svg/github.svg","svg/icons8-refresh-32.png","svg/linkedin.svg","svg/refresh.svg","svg/spotify.svg","theme/dark.css","theme/light.css"]),
	_: {
		mime: {".jpeg":"image/jpeg",".svg":"image/svg+xml",".png":"image/png",".css":"text/css"},
		entry: {"file":"start-8bd93a9e.js","js":["start-8bd93a9e.js","chunks/vendor-ccb5527d.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js')
		],
		routes: [
			{
				type: 'page',
				pattern: /^\/$/,
				params: null,
				path: "/",
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/experiences\/?$/,
				params: null,
				path: "/experiences",
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/projects\/?$/,
				params: null,
				path: "/projects",
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/etc\/?$/,
				params: null,
				path: "/etc",
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/wpm\/?$/,
				params: null,
				path: "/wpm",
				a: [0,6],
				b: [1]
			}
		]
	}
};
