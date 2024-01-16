
import AddTodo from './components/AddTodo'
import Navbar from './components/Navbar'
import Todos from './components/Todos'

const App = () => {
  return (
    <main>
      TODO APP with Typescript
      <Navbar />
      <AddTodo />
      <Todos />
    </main>
  )
}

export default App
