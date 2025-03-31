
import Features from "../components/Features";
import LeafletMapComponent from "../components/LeafletMapComponent";
import Webmuba from "../components/Webmuba";

export default function Home() {
  return (
    <>
    
      <div className="flex flex-col items-center">
        <div className="mt-6 text-center">
           <Webmuba/>
          <p className="text-lg mt-4 text-slate-600 max-w-xl" style={{color:"black" , fontSize:"30px"}}>
            Welcome to WebMuba where we make what you want when you want it. Making world-class websites of the future.
          </p>
        </div>
      </div>
      <Features/>
      <LeafletMapComponent/>
    </>
  );
}