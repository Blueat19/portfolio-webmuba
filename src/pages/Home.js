import LeafletMapComponent from "../components/LeafletMapComponent";
import Services from "../components/Services";
import ScottCyberWorld from "../components/ScottCyberWorldSection";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="mt-6 text-center">
           <ScottCyberWorld/>
          <h1 className="text-lg mt-4 text-slate-600 max-w-xl" style={{color:"black" , fontSize:"30px"}}>
             SERVICES
          </h1>
        </div>
      </div>
      <Services/>
      <LeafletMapComponent/>
    </>
  );
}