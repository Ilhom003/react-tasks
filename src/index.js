import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TransferDollar from './task1';
import CalcOld from './task2';
import Calculator from './task3';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TransferDollar/>
    <CalcOld/>
    <Calculator/>
    <a href='https://github.com/AirenSoft/OvenMediaEngine/?gclid=Cj0KCQjwntCVBhDdARIsAMEwAClB19z3zsEOYwruqseulBDH1kXTEnc6cSDmokfCLiRd9iopJ8QpM3QaAhVKEALw_wcB'>Git Hub</a>
  </React.StrictMode>
);
