import * as React from 'react';
import { Sidebar } from './components/sidebar/Sidebar';
import { HomePage } from './components/homepage/HomePage';

const App: React.FC = () => {
  return(
    <>
    <div className='d-flex'>
      <Sidebar />
      <HomePage />
    </div>
    </>
  ) ;
};

export default App;
