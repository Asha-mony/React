import './App.css'


function App() {
  const friends = ['asha', 'rohul', 'mendi']

  return (
    <div>
      <h1>React Intro</h1>

      <Friend
      name={'Sajal'}
      girlfriend={'Aliya'}>
      </Friend>

      <Friend
      name={'Monir'}
      girlfriend={'Tuni'}>
      </Friend>
    </div>
    
  )
}

export default App

function Friend(props) {
  return(
    <div>
      <h1>Name:{props.name}</h1>
      <h1>Girlfriend:{props.girlfriend}</h1>
    </div>
  )
}










//   return (
//     <div>
//       <h1>First day Intro with React</h1>
//     {
//       friends.map ((friend, index) => <Person key={index} data= {friend}></Person>)
//     }

//      {/* <Person data='Mendi'></Person>
//      <Person data='Rohul'></Person>
//      <Person data='Asha'></Person> */}

//     </div>
//   )
// }

// export default App



// function Person(props) {
//   console.log(props);
//   return (
//     <div>
//       <h1>Name:{props.data}</h1>
      
//     </div>
//   )
// }



// function add(a,b) {
//   return a + b
// }
// add(3, 2)