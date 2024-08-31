import classNames from 'classnames';
import { useOutletContext } from '@remix-run/react';

interface ICardProps {
	name: string;
	linkUrl: string;
	imgName: string;
	height?: number;
	width?: number;
}

export default function Card({
	name,
	linkUrl,
	imgName,
	height = 150,
	width = 150,
}: ICardProps) {
	const { darkMode } = useOutletContext<{ darkMode: boolean }>();

	return (
		<a href={linkUrl} target="_blank">
			<article
				className={classNames(
					`p-4 min-h-80 w-64 rounded-xl text-red-900 bg-white 
					flex flex-col justify-between items-center 
					border-8 border-double border-red-900 shadow-card
					duration-1000 hover:scale-105`,
					{ 'shadow-white': darkMode }
				)}
			>
				<img src="/images/moons.png" height={15} width={70} />
				<img src={`/images/${imgName}.png`} height={height} width={width} />
				<div className="flex flex-col items-center">
					<span>{name}</span>
					<img src="/images/moons.png" height={15} width={70} />
				</div>
			</article>
		</a>
	);
}
