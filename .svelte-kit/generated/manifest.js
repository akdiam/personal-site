const c = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/experiences/index.svelte"),
	() => import("../../src/routes/projects/index.svelte"),
	() => import("../../src/routes/todos/index.svelte"),
	() => import("../../src/routes/etc/index.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/experiences/index.svelte
	[/^\/experiences\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/projects/index.svelte
	[/^\/projects\/?$/, [c[0], c[4]], [c[1]]],

	// src/routes/todos/index.svelte
	[/^\/todos\/?$/, [c[0], c[5]], [c[1]]],

	// src/routes/etc/index.svelte
	[/^\/etc\/?$/, [c[0], c[6]], [c[1]]]
];

// we import the root layout/error components eagerly, so that
// connectivity errors after initialisation don't nuke the app
export const fallback = [c[0](), c[1]()];