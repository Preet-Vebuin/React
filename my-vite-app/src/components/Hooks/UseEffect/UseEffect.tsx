import { useEffect, useState } from "react";

const FetchData : React.FC = () => {
  const [data, setData] = useState<any>();

  useEffect(() => {
    
    const fetchData = async() =>{
        try {
           const  response =  await fetch("https://jsonplaceholder.typicode.com/todos");
           const json = await response.json();
           // data = json.name and all also available by id/1 and all 
           setData(json)

        }
        catch(error){

        console.error("Error in fetching the data : " , error)
        }
    } 
    fetchData();
    console.log("component mounted");

    return () => console.log("component un mounted"); // clean up function

    },[])
  return <pre>{data ? JSON.stringify(data, null, 2) : "Loading..."}</pre>;

}; // [] empty dependency array only runs when component mount

export default FetchData;

// import './App.css';
// import { useEffect, useState } from 'react';

// function App() {

//   const [name, setName] = useState('John');
//    useEffect(()=>{
//     console.log("1- No dependency array at all");
//   });
//   useEffect(()=>{
//     console.log("2- Empty dependency array");
//   }, []);
//   useEffect(()=>{
//     console.log("3- Dependency array with state");
//   }, [name]);

//   const clickHandler = () => {
//     setName('Jane');
//   }
//   return (
//     <div className="App">
//       <button onClick={clickHandler}>Click to update state</button>
//       <p>{`Name: ${name}`}</p>
//     </div>
//   );
// }

// export default App;