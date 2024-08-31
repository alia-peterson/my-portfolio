import Card from '~/components/card';

export default function Contact() {
	return (
		<div className="w-full max-w-7xl py-4 h-5/6 gap-2 flex justify-center items-center flex-wrap overflow-auto justify-evenly">
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
			<Card
				name="Resume"
				imgName="moon"
				linkUrl="https://docs.google.com/document/d/1YcqVqqt4h0yMfoDXkbvZGpbcaYDd4j4U/edit?usp=sharing&ouid=107309472481523014026&rtpof=true&sd=true"
			/>
		</div>
	);
}
