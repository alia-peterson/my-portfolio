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
import { useState } from 'react';
import classNames from 'classnames';

export const links: LinksFunction = () => [
	{ rel: 'stylesheet', href: appStylesHref },
];

export const meta = () => {
	return [{ title: 'Alia Peterson Portfolio' }];
};

export default function App() {
	const [lightMode, setLightMode] = useState(false);

	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body
				className={classNames('text-2xl', {
					'invert brightness-50': lightMode,
				})}
			>
				<header className="shadow-xl bg-black text-teal-400">
					<div className="flex flex-col items-end p-2">
						{/** hover hover--button */}
						{/* <button className="">
							<img
								src="images/skull.png"
								alt="skull"
								aria-roledescription="toggle theme"
								className={classNames('h-10', { 'rotate-180': lightMode })}
								onClick={() => setLightMode((prev) => !prev)}
							/>
						</button> */}
					</div>
					<h1 className="text-center pb-2 text-4xl">Alia Peterson Portfolio</h1>
					<nav className="border-y-2 border-y-teal-400">
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
