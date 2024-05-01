import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Errorpage(){
   return(
    <>
     <Header/>
      <div class="min-h-[calc(100vh-16rem)] flex items-center justify-center">
      <div class="mt-16 text-center">
        <h1 class="text-4xl lg:text-5xl font-bold lg:tracking-tight">404</h1>
        <p class="text-lg mt-4 text-slate-600">Page not found.</p>
      </div>
    </div>
     <Footer/>
    </>
   )

}