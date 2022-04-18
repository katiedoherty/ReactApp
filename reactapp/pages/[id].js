
import styles from '../styles/ReadMore.module.css'
import Link from 'next/link';
import { library } from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import Error from './errorpage';
import { faCircleLeft, faHighlighter } from '@fortawesome/free-solid-svg-icons';

//this component returns the detailed information of a country when the user clicks ona country
export default function CountryInfo({data}) {

if(data.length===1){
  return (
   <div >
     <div className={styles.backbutton}>

       <Link href="/">
    <p><FontAwesomeIcon icon={faCircleLeft}/> Back</p>
       </Link>
    </div>
  
    {data.map(result =>{
      
      return(
        
        <div key={result.name.common}>
          
        <div className={styles.nameofcountry}> 
        <b>Name of Country: {result.name.common}</b>
        </div>
        <div className ={styles.datacontainer}>
        
         <div className={styles.images}> 
         <br />
         <img src={result.flags.svg} alt=""/>
         </div> 
         <div className={styles.text}> 
        
        
       <p> <b>Population:</b> {result.population}</p>
        
       <p> <b>Currency: </b>{Object.keys(result.currencies).map(k => result?.currencies[k])
            .map(currency => Object.values(currency)[0])}
        </p>
        <p>
        <b>Capital: </b>{result.capital}<br />
        </p>
        <p>
        <b>Languages: </b>{Object.values(result.languages)+" "}<br/>
        </p>
        </div>
        </div>
        <div className={styles.bordercountries}>
          <h2>Border Countries</h2><br/>
          {result?.borders?.map(countries=>
          <div key ={countries} className ={styles.borders}><b>{countries}</b></div>)}
         
        </div>
         
         </div>
        
      )
      
    })}
   
   </div>
  )
}
else{
  return <Error />
}
}


export async function getServerSideProps(context) {
  let data;
  const name = context.query.id;
    try{
      
      const res = await fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`);
    
      data = await res.json();
    }catch(err){
      console.log(err);
      data=[];
    }
 
  return{
    props:{data}
  }
}
