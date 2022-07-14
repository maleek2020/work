// import logo from './logo.svg';
import './App.css';
import { Users } from './data.js';
import Group from './group';
import Filt from './filt';
import { useState } from 'react';

function App() {
  const [query, setQuery] = useState("");
  const [nam, setNam] = useState(0)
  // console.log(nam);
  return (
    <div className="App">
      <input placeholder="Search..." className="search" onChange={(e)=> setQuery(e.target.value)} />
      <p className='fill'>Filter By:</p>
      <ul className="filter">
        <li onClick={() => setNam(1)}>Name</li>
        <li onClick={() => setNam(2)}>Age</li>
        <li onClick={() => setNam(3)}>Level</li>
        <li onClick={() => setNam(4)}>Department</li>
        <li onClick={() => setNam(0)}>All</li>
      </ul>

      <section>
      {Users.filter(user=>user.name.toLowerCase().includes(query)
       || user.age.includes(query)
       || user.level.toLowerCase().includes(query)
       || user.department.toLowerCase().includes(query)).map((item) => 
       {if (nam === 1){
       return <Filt key={item.id} item={item.name} name="name" />
        }
        if (nam === 2){
        return <Filt key={item.id} item={item.age} age="age" />
        }
        if (nam === 3){
        return <Filt key={item.id} item={item.level} level="level" />
        }
        if (nam === 4){
        return <Filt key={item.id} item={item.department} department="department" />
          } 
       return <Group key={item.id} item={item} />
       
      
      }
      )}
    </section>

    </div>
  );
}

export default App;
