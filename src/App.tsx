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
        <Route path="/contact-list" element={<ContactList />} />
        <Route path="/contact-details" element={<ContactDetails />} />
        <Route path="/create-contact" element={<CreateContactForm />} />
        <Route path="/update-contact" element={<UpdateContactForm />} />
        <Route path="*" element={<p>Page Not Found</p>} />
      </Routes>
    </>
  )
}

export default App
