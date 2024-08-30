import Card from '~/components/card';

export default function Contact() {
	return (
		<div className="w-full h-5/6 flex justify-center items-center">
			<div className="grid grid-cols-2 gap-3">
				<Card
					name="Github"
					imgName="hat"
					linkUrl="https://github.com/alia-peterson"
				/>
				<Card
					name="LinkedIn"
					imgName="plant bottle"
					linkUrl="https://www.linkedin.com/in/alia-peterson/"
				/>
				{/* <Card name="Resume" imgName="moon" linkUrl="" /> */}
			</div>
		</div>
	);
}
