import './App.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './routes';
import Header from './components/common/Header';

function App() {  
  const router = createBrowserRouter(routes);
  return (
    <div className="App">
      <Header />
      <main className='main-content py-4'>
        <div className='container'>
          <RouterProvider router={router} />
        </div>
      </main>
    </div>
  );
}

export default App;
