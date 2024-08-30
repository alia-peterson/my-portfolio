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

export const meta = () => {
	return [{ title: 'Alia Peterson Portfolio' }];
};

export default function App() {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body className="text-2xl">
				<header className="shadow-xl bg-white">
					<div className="flex flex-col items-end p-2">
						{/* <button className="hover hover--button">
							<img
								src="images/skull.png"
								alt="skull"
								aria-roledescription="toggle theme"
								className="h-10"
							/>
						</button> */}
					</div>
					<h1 className="text-center pb-2 text-4xl">Alia Peterson Portfolio</h1>
					<nav className="border-2 border-y-black">
						<ul className="flex flex-row justify-evenly py-4">
							<li>
								<NavLink to="/">Home</NavLink>
							</li>
							<li>
								<NavLink to="/contact">Contact</NavLink>
							</li>
						</ul>
					</nav>
				</header>
				<Outlet />
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}
