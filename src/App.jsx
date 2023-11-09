import './App.css'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <h1>First day Intro with React</h1>
      {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, accusantium?</p>
      <img src="/public/vite.svg" alt="" /> */}
      <Person></Person>
    </div>
  )
}

export default App



function Person() {
  return (
    <div>
      <h1>Name: 'Mendi'</h1>
      <h1>Age: 22</h1>
      <h2>Class: 15</h2>
    </div>
  )
}