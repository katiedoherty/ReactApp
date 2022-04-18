
import styles from'../styles/Home.module.css'
import SearchCountry from '../othercomponents/searchcountry'
import dynamic from 'next/dynamic'

export default function Home({data}) {
  //returns the input field, needed a way to pass user input from the child component to the parent
 const {render, searchcountry} = SearchCountry();

  const Apidata = dynamic(() => import('../othercomponents/datafromapi'))
  return (
   <div className={styles.datareturned}>

     <div className="pageheader">
     <h1>Countries App</h1>
    <div>
      {/*renders the input field*/}
      {render}
    </div>
    </div> 
    {/*returns all the data from the data base*/}
    <Apidata data={data} searchcountry={searchcountry}/>

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