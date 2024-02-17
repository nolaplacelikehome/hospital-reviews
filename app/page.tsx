import Image from "next/image";
import Searchbar from "./components/Searchbar";

export default function Home() {
  return (
    <>
      <div className="container mx-auto">
        <Searchbar />
        <div>Search Results</div>
      </div>  
    </>
  );
}