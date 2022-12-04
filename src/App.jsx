import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Navigation from "./components/navigation";
import Contacts from './components/contacts';

function App() {
  return (
    <div>
      <Navigation />
      <Contacts />
    </div>
  );
}

export default App;
