import Nav from "./Nav"
export default function Home(){
    return (<div>
       <div style={{display:"flex", flexDirection:"column", minHeight:"100vh", backgroundColor:"#04152D"}}>
          <Nav/>
          <div style={{color:"white", minHeight:"80vh" , display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
          <h1 style={{fontSize:"80px", margin:"0"}}>Welcome.</h1>
          <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>
          <div>
          <input type="text" placeholder="Search for movie or TV Show...." style={{height:"40px", width:"40vw", borderRadius:"20px 0 0 20px", padding:"10px", fontSize:"20px"}}/>
          <button style={{height:"64px", width:"12vw", borderRadius:"0 20px 20px 0", padding:"10px", backgroundColor:"orange", color:"white", fontSize:"20px"}}>Search</button>
          </div>

          </div>

         
       </div>
        
    </div>)
}