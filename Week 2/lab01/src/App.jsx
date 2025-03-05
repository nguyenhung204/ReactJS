import './App.css'
import Calculator from './components/calculator/calculator'
import Categoty from './components/category/category'
import Logname from './components/LogName/LogName'
import Sum from './components/sum/sum'
import Todo from './components/todo/todo'


function App() {

  return (
    <div>
      <Logname/>
      <Calculator/>
      <Todo/>
      <Categoty/>
      <Sum/>
    </div>
  )
}

export default App
