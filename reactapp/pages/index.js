
import styles from'../styles/Home.module.css'
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
export default function Home({data}) {

  const router = useRouter();
 
  //when user clicks on button to find out more about a country
  const search = (id) =>{
    router.push(`/${id}`)
  }

  const Searchbar = dynamic(() => import('./searchcountry'))
  return (
   <div className={styles.datareturned}>

     <div className="pageheader">
     <h1>Countries App</h1>
    <div>
      <Searchbar placeholder= "Search Country By Name" data = {data}/>
    </div>
    </div> 
    {data.map(result =>{
      
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