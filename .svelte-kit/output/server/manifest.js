export const manifest = {
	appDir: "_app",
	assets: new Set(["img/headshot.jpeg","svg/github.svg","svg/linkedin.svg","svg/spotify.svg"]),
	_: {
		mime: {".jpeg":"image/jpeg",".svg":"image/svg+xml"},
		entry: {"file":"start-d4bb2be1.js","js":["start-d4bb2be1.js","chunks/vendor-58eca5e4.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js')
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
			}
		]
	}
};
