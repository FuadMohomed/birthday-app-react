import React, { useState } from 'react';
import data from './data';
import List from './List';
const App = () => {
  const [people,setPeople] = useState(data)
  return(
    <>
    <main>
      <section className='container'>
        <h3> 0 birthdays today</h3>
        <List people = {people}/>
        <button className='btn' onClick={()=> setPeople([])}>
          Clear Button
        </button>

      </section>


    </main>
    
    </>
  )
}


export default App;
