import { useRouter } from 'next/router';
import styles from'../styles/Home.module.css'
import { useState } from 'react';


//this component returns the data from the api 
export default function Data({data, searchcountry}) {
    const router = useRouter();
    //pushes the users input to the id page and displays the country detailed information
    const search = (id) =>{
    
        router.push(`/${id}`)
      }

      //loads more countries when the user presses the load more button
      const [visiblecountries, setVisibleCountries]=useState(9);
      const loadMore = () =>{
        setVisibleCountries((prevValue) => prevValue + 9);
      }

      
     
return(
    <div>

    {/*the data filter function filters through the returned data to find countries that match the users input*/}
    {data.filter((val)=>{
      if(searchcountry==""){
        return val;
      }
      else if(val.name.common.toLowerCase().includes(searchcountry.toLowerCase())){
        return val;
      }
    }).slice(0, visiblecountries).map(result =>{
      
      return(
      <div className={styles.datacontainer} key={result.name.common} onClick={()=>search(result.name.common)}>
        <div className={styles.dataapi}>
        <img src={result.flags.svg} alt=""/>
        </div>
        <div className={styles.dataapi}>
        <p> <b>Name:</b> {result.name.common}</p>
        <p>
        <b>Population:</b> {result.population}<br/>
        </p>
        <p>
        <button className={styles.Readmore} onClick={()=>search(result.name.common)}>Read More</button>
        </p>
</div>
         
         </div>
      )
      
    })}
    {
        searchcountry==""?
        <div className={styles.loadmore}>
   
    <button className="searchbutton" onClick={loadMore}>Load More</button>
  
   </div>
   :null
    }
     
    </div>
)
}

