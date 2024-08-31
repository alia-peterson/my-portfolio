import { useOutletContext } from '@remix-run/react';
import classNames from 'classnames';

export default function Home() {
	const { darkMode } = useOutletContext<{ darkMode: boolean }>();

	return (
		<div className="w-full h-5/6 px-4 flex justify-center items-center">
			<article
				className={classNames(
					'bg-white text-red-900 shadow-card border-2 border-red-900 rounded-xl w-large p-4 text-justify',
					{ 'shadow-white': darkMode }
				)}
			>
				<img className="float-right w-16" src="/images/leaves.png" />
				<p>
					Alia has found her passion in web development and loves to learn new
					technologies and best practices while solving complex problems. Her
					experience in designing and implementing scalable software
					architecture, as well as managing and mentoring a team of developers,
					has been extremely rewarding and she hopes to continue that trajectory
					for many years to come.
				</p>
			</article>
		</div>
	);
}
