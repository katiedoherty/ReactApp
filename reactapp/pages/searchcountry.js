import { useState } from 'react';
import { useRouter } from 'next/router';
// import the library
import { library } from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
// import your icons
import { faMagnifyingGlass, faHighlighter } from '@fortawesome/free-solid-svg-icons';

export default function searchcountry({placeholder, data}){

    const router = useRouter();
    const [searchcountry, setsearchcountry] = useState("");
    const [errormessage, seterrormessage] = useState("");
//function for when the user wants to search for a country.
    const usersearch = (e) =>{
  
        e.preventDefault();
        try {
          router.push(`/${searchcountry}`)
        }
        catch(e) {
          seterrormessage("There is no Country with that name")
        }
        
        setsearchcountry("");
      }

      const Filterdata = (e)=>{
        setsearchcountry(e.target.value)
        //const newFilter = data.filter((value)=>{
          //  return value.tit
      //  })
      }
         //https://www.youtube.com/watch?v=x7niho285qs = filter serach
    return(
        <div className="searchcountrycontainer">
             
             <form>
                 
        <div className="inputelement">
         <input
         type="text"
         name="search"
         onChange={Filterdata}
         value={searchcountry}
         placeholder={placeholder}
         />
          <button className="searchbutton" onClick={usersearch}>Search</button>
     </div>
 
  
   
   </form>
        </div>
    )
   
}
