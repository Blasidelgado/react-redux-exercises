import logo from './logo.svg';
import './App.css';
import TodosContainer from './components/containers/TodoContainer';
import Filteroptions from './components/pure/FilterOptions';
import TodoFormContainer from './components/containers/TodoFormContainer';

function App() {
  return (
    <div>
      <div>
        <TodoFormContainer />
      </div>
      <div style={{minHeight: '100px'}}>
        <TodosContainer />
      </div>
      <div>
        <Filteroptions />
      </div>
    </div>
  );
}

export default App;
