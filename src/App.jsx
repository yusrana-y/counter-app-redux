import './App.css'
import Counter from './components/Counter'

function App() {

  return (
    <>
      <h1 className='text-center mt-5'>COUNTER APP</h1>
      <div style={{height:'70vh'}} className="justify-content-center align-items-center d-flex w-100">
      <Counter/>
      </div>
    </>
  )
}

export default App
