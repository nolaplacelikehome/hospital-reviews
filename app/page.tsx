import Searchbar from "./components/Searchbars/Searchbar";
import Section from './components/HomeSection';
import ResultsContainer from "./components/containers/ResultsContainer";

export default function Home() {
  return (
    <>
      <div className="container mx-auto h-screen">
        <Section />
        <Searchbar />
        <ResultsContainer />
      </div>  
    </>
  );
}