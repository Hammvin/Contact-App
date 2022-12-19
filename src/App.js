import {Routes, Route} from 'react-router-dom';
import {ContactContext} from './Components/ContactContext'
import {useState} from 'react';
import ContactList from './Components/ContactList';
import Header from './Components/Header';
import AddContact from './Components/AddContact';

function App() {
  const initialValues = {name:"", phone: "", email: ""};
  const [Contacts, setContacts] = useState(initialValues);
 


  return (
    <div className="App">
      <ContactContext.Provider value={{Contacts, setContacts, initialValues}}>
        <Header />
        <AddContact />
        <ContactList />
      </ContactContext.Provider>
    </div>
  );
}

export default App;
