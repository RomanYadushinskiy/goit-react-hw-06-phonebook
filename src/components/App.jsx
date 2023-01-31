import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
// import './App.module.css';

export const App = () => {
  return (
    <section style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 20,
          color: '#010101',
        }}>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </section>
  );
};

// // import React, { Component } from 'react';
// import React, { useState, useEffect } from 'react';
// import { nanoid } from 'nanoid';
// import { ContactForm } from './ContactForm/ContactForm';
// import { ContactList }  from './ContactList/ContactList';
// import { Filter } from './Filter/Filter';

// export const App = () => {
//   const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('contacts')), []);
//   const [filter, setFilter] = useState('');

//   useEffect(() => {
//     localStorage.setItem('contacts', JSON.stringify(contacts));
//   }, [contacts]);

//   const formSubmitHandler = (name, number) => {
//     const contact = {
//       id: nanoid(),
//       name,
//       number
//     };

//     contacts.find(item => (item.name.toLowerCase() === contact.name.toLowerCase()
//     || item.number === contact.number))
//       ? alert(`${name} is already in contacts`)
//       : setContacts([contact, ...contacts])
//   };

//   const getChangeFilter = data => {
//     setFilter(data.target.value);
//   };

//   const filterContacts = () => {
//     return (
//       contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     ));
//   };

//   const deleteContact = id => {
//     setContacts(contacts.filter(contact => contact.id !== id))
//   };
  
//   return (
//       <div style={{
//           display: 'flex',
//           flexDirection: 'column',
//           justifyContent: 'center',
//           alignItems: 'center',
//           fontSize: 20,
//           color: '#010101',
//         }}>
//         <h1>Phonebook</h1>
//         <ContactForm onSubmit={formSubmitHandler} />

//         <h2>Contacts</h2>
//         <Filter filter={filter} getChangeFilter={getChangeFilter} />
//         <ContactList
//           contacts={filterContacts()}
//           onDelete={deleteContact} />
//       </div>
//     );
// };


