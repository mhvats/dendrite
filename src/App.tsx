import * as React from 'react';
import { Sidebar } from './components/sidebar/Sidebar';

interface Props {
  name ?:string;
}

const App: React.FunctionComponent<Props> = (props) => {
  return(
    <>
    <div>
      <Sidebar />
    </div>
    </>
  ) ;
};

export default App;
