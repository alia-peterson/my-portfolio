import { useState } from 'react';
import classNames from 'classnames';
import {
	Links,
	LiveReload,
	Meta,
	Scripts,
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
	const [darkMode, setDarkMode] = useState(false);

	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body
				className={classNames('text-2xl font-semibold', { invert: darkMode })}
			>
				<header
					className={classNames('shadow-lg bg-white text-red-900', {
						'shadow-white': darkMode,
					})}
				>
					<div className="flex flex-col items-end p-2">
						<button className="duration-500 hover:rotate-12">
							<img
								src="images/skull.png"
								alt="skull"
								aria-roledescription="toggle theme"
								className={classNames('h-10', {
									'rotate-180 animation-half duration-1000': darkMode,
								})}
								onClick={() => setDarkMode((prev) => !prev)}
							/>
						</button>
					</div>
					<h1 className="text-center pb-2 text-4xl">Alia Peterson Portfolio</h1>
					<nav className="border-y-2 border-y-red-900">
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
				<Outlet context={{ darkMode }} />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}
