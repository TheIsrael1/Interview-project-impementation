import {useState} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import DashboardControl from './components/DashboardControl';
import { NotesViewProvider } from './context/NotesViewContext';
import ContentArea from './components/ContentArea';

function App() {

  const [sidebarToggled, setSidebarToggled] = useState(false)

  const toggleSidebar = () =>{
    setSidebarToggled(!sidebarToggled)
  }
  return (
    <div className={`container-fluid bg-light py-3 main  ${sidebarToggled ? `px-lg-2` : `px-lg-5`}`}>
      <NotesViewProvider>
        <div className='row'>
        <nav className={`col-2 ${!sidebarToggled && `d-none`}`}>
          <div 
          className='px-1 mt-3 h-100 rounded'
          style={{backgroundColor: "#110C35"}}
          >
          </div>
        </nav>
        <main className={`${sidebarToggled ? `col-10` : `col-12`}`}>
        <Header toggle={()=>toggleSidebar}/>
        <DashboardControl/>
        <ContentArea />
        </main>
        </div>
    </NotesViewProvider>
    </div>
  );
}

export default App;
