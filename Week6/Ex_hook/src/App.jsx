import './App.css'
import ApiEffect from './components/bt1/ApiEffect'
import CounterReducer from './components/bt1/CounterReducer'
import InputRef from './components/bt1/InputRef'
import { DarkThemeProvider } from './components/bt1/useContextDemo';
import Todo from './components/bt2/Todo';
import TestHook from './components/bt3/TestHook';

function App() {

  return (
    <> 
    <div className="container">
    <DarkThemeProvider >
        <CounterReducer />
        <InputRef/>
        <ApiEffect/>
     </DarkThemeProvider>

     <Todo/>
     <TestHook/>
     </div>
    </>
  )
}

export default App
