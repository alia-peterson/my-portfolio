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
	// hover hover--card
	return (
		<a href={linkUrl} target="_blank">
			<article
				className={
					'rounded-xl text-teal-400 bg-black flex flex-col justify-between items-center p-4 m-4 min-h-80 w-64 border-8 border-double border-teal-400 shadow-card'
				}
			>
				<img src="/images/moons.png" height={15} width={70} />
				<img src={`/images/${imgName}.png`} height={height} width={width} />
				<p>{name}</p>
				<img src="/images/moons.png" height={15} width={70} />
			</article>
		</a>
	);
}
