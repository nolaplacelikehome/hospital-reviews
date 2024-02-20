import Link from "next/link";

export default function ResultsCard() {
	return(
		<Link href="#" className="mx-auto mb-10 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
			<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Hospital Name and Location (City, State)</h5>
			<span className="block border-solid border w-full px-1 my-5"></span>
			<p className="font-normal text-gray-700 dark:text-gray-400">Rating</p>	
		</Link>
	);
}