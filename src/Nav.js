export default function Nav(){

    return (
    <>
   <div style={{display:"flex", backgroundColor:"black", justifyContent:"space-around"}}>
    <img src="https://moviex-olive.vercel.app/assets/movix-logo-d720c325.svg" alt=""/>
    <div style={{display:"flex", gap:"25px", color:"white"}}>
        <h3>Movies</h3>
        <h3>TV Shows</h3>
        <h3>
        <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </h3>
    </div>
   </div>
    </>)
}