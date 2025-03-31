export default function Errorpage(){
   return(
    <>
      <div class="min-h-[calc(100vh-16rem)] flex items-center justify-center" style={{width: "100vw", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center"}}>
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
          <h1 
          class="text-4xl lg:text-5xl font-bold lg:tracking-tight"
          style={{color:"black" , fontSize:"200px"}}
          >404</h1>
          <p class="text-lg mt-4 text-slate-600"
           style={{color:"black" , fontSize:"50px"}}
          >Page not found.</p>
        </div>
      </div>
    </>
   )

}

