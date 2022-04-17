
import styles from '../styles/Home.module.css'
import Link from 'next/link';


export default function CountryInfo({data}) {
 

  return (
   <div>
     <div className="pageheader">
       <Link href="/">
       <button>Go Back</button>
       </Link>
       
   
     
    </div>
  
    {data.map(result =>{
      
      return(
        <div>
       
        <div key={result.name.common}><img src={result.flags.svg} alt=""/> <br />Name: {result.name.common}<br />
        
        Population: {result.population}<br />
        
        Currency: {Object.keys(result.currencies).map(k => result.currencies[k])
            .map(currency => Object.values(currency)[0])}<br/>
        
        Capital: {result.capital}<br />
        Languages: {Object.values(result.languages)+" "}<br/>
        </div>
         
         </div>
      )
      
    })}
   
   </div>
  )
}


export async function getServerSideProps(context) {
    const name = context.query.id;
  const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
  const data = await res.json();
  return{
    props:{data}
  }
}
