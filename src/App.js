import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import DashboardControl from './components/DashboardControl';
import { NotesViewProvider } from './context/NotesViewContext';
import ContentArea from './components/ContentArea';

function App() {
  return (
    <div className="container-fluid bg-light px-5 py-3 main">
      <NotesViewProvider>
        <Header />
        <DashboardControl />
        <ContentArea />
    </NotesViewProvider>
    </div>
  );
}

export default App;
