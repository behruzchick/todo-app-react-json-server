import { Route,Link,Routes } from 'react-router-dom'
import './App.css';
import { Create } from './components/Create';
import { Main } from './components/Main';
import { Edit } from './components/Edit';
function App() {
  return (
    <>
    <div className="App">
      <h1>Db json server aplication</h1>
      <h3>Behruz Akbaraliev</h3>
      <Link className='add_btn' to={'/create'}>Add new todo (+)</Link>
    </div>
    <Routes>
            <Route path={'/'} element={<Main/>}></Route>
            <Route path={'/create'} element={<Create/>}></Route>
            <Route path={'/edit/:id'} element={<Edit />}></Route>
    </Routes>
    </>
  );
}

export default App;
