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
	// outline-double outline-offset-8 p-4
	return (
		<a href={linkUrl} target="_blank">
			<article className="hover hover--card bg-white rounded-xl flex flex-col items-center p-4 min-h-80 w-64">
				<img src="/images/moons.png" height={15} width={70} />
				<img src={`/images/${imgName}.png`} height={height} width={width} />
				<p>{name}</p>
				<img src="/images/moons.png" height={15} width={70} />
			</article>
		</a>
	);
}
