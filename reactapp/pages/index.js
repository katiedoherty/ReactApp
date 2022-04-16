
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Home({data}) {

  const router = useRouter();
  const [searchcountry, setsearchcountry] = useState("");
  const [errormessage, seterrormessage] = useState("");
  const search = (id) =>{
    router.push(`/${id}`)
  }

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
  return (
   <div>
     <h1>Countries App</h1>
     <form>
     <label>Search for Country By Name </label>
         <input
         type="text"
         name="search"
         onChange={(e) => setsearchcountry(e.target.value)}
         value={searchcountry}
         />
         
     {errormessage}
   
   <button onClick={usersearch}>Search</button>
   </form>
    {data.map(result =>{
      
      return(
        <div>
        <p key={result.name.common}><img src={result.flags.svg} alt=""/> <br />Name: {result.name.common}<br />
        <br />
        Population: {result.population}</p>
      
        <button onClick={()=>search(result.name.common)}>Read More</button>
       
         
         </div>
      )
      
    })}
   
   </div>
  )
}

const deafaultEndPoint = `https://restcountries.com/v3.1/all`;
export async function getStaticProps(context) {
  const res = await fetch(deafaultEndPoint);
  const data = await res.json();
  return{
    props:{data}
  }
}