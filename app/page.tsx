import Image from "next/image";
import Searchbar from "./components/Searchbars/Searchbar";
import ResultsCard from "./components/cards/ResultsCard";
import Section from './components/HomeSection';

export default function Home() {
  return (
    <>
      <div className="container mx-2 my-5">
        <Section />
        <Searchbar />
        <ResultsCard />
        <ResultsCard />
        <ResultsCard />
        <ResultsCard />
      </div>  
    </>
  );
}