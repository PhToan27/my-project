import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import NamePerson from "./NamePerson";
import PersonDetail from "./PersonDetail";
import PeopleList from "./PeopleList";
import PeopleTable from "./PeopleTable";
import FirstTeenager from "./FirstTeenager";
import AreAllTeenagers from "./AreAllTeenagers";
import SortedPeople from "./SortedPeople";
import GroupedByOccupation from "./GroupedByOccupation";
import AverageAgeByOccupation from "./AverageAgeByOccupation";


import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <NamePerson />
    <PersonDetail />
    <PeopleList/>
    <PeopleTable/>
    <FirstTeenager/>
    <AreAllTeenagers/>
    <SortedPeople/>
    <GroupedByOccupation/>
    <AverageAgeByOccupation/>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
