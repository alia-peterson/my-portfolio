import {
	Links,
	LiveReload,
	Meta,
	Scripts,
	ScrollRestoration,
	Outlet,
	NavLink,
} from '@remix-run/react';

import type { LinksFunction } from '@remix-run/server-runtime';

import appStylesHref from './app.css';

export const links: LinksFunction = () => [
	{ rel: 'stylesheet', href: appStylesHref },
];

export default function App() {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body className="bg-gray-700 text-white text-2xl">
				<h1 className="text-4xl py-3 text-center">Portfolio</h1>
				<nav>
					<ul className="bg-gray-900 flex flex-row justify-evenly py-4">
						<li>
							<NavLink to="/">Home</NavLink>
						</li>
						<li>
							<NavLink to="/contact">Contact</NavLink>
						</li>
					</ul>
				</nav>
				<Outlet />
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}
