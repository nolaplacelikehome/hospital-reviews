import ResultsCard from "../cards/ResultsCard";

export default function ResultsContainer() {

	return (
		<div className="container mt-10 p-10 h-1/2 overflow-y-auto z-10">
			<ResultsCard />
			<ResultsCard />
			<ResultsCard />
			<ResultsCard />
			<ResultsCard />
			<div className="text-center">1 &nbsp; &nbsp; {">"}</div>
		</div>
	);
}