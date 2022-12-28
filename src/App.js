import { RouterProvider } from 'react-router-dom';
import './App.css';
import {routes} from './components/routes';

function App() {
  return (
    <div className='text-slate-200' ><RouterProvider router={routes}>

      </RouterProvider>
    </div>
  );
}

export default App;
