import ContactDetails from './components/ContactDetails';
import ContactList from './components/ContactList';
import CreateContactForm from './components/CreateContactForm';
import Home from './components/Home'
import { Routes, Route} from "react-router-dom";
import UpdateContactForm from './components/UpdateContactForm';


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<ContactList />} />
        <Route path="/contacts/:id" element={<ContactDetails />} />
        <Route path="/create" element={<CreateContactForm />} />
        <Route path="/contacts/:id/update" element={<UpdateContactForm />} />
        <Route path="*" element={<p>Page Not Found</p>} />
      </Routes>
    </>
  )
}

export default App
