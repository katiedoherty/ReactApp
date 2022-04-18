import { useState } from 'react';

//this is the component for the searchbar at the top of homepage.
export default function SearchCountry(){

    const [searchcountry, setsearchcountry] = useState("");

    return{
      searchcountry,
      render:(
        <div className="searchcountrycontainer">
            
             <form>
                 
        <div className="inputelement">
         <input
         type="text"
         name="search"
         onChange={(e) =>setsearchcountry(e.target.value)}
         value={searchcountry}
         placeholder="Search Country By Name"
         />
         
     </div>
 
  
   
   </form>
        </div>
    )}
   
}
