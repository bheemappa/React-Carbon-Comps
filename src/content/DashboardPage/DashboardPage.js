import React from 'react'
import DashboardTable from './DashboardTable';


const headers = [
  {
    key: 'fname',
    header: 'First Name',
  },
  {
    key: 'lname',
    header: 'Last Name',
  },
  {
    key: 'designation',
    header: 'Designation',
  },
  {
    key: 'email',
    header: 'Email',
  },
  {
    key: 'phone',
    header: 'Phone',
  },
  {
    key: 'address',
    header: 'Address',
  },
];
const rows = [
  {
    id: '1',
    fname: 'Bheema',
    lname: 'Bhovi',
    designation: 'Application Developer',
    email: 'bheema@gmail.com',
    phone: '113423423',
    address: 'Bangalore',
  },
  {
    id: '2',
    fname: 'Prabhat',
    lname: 'Kumar',
    designation: 'Application Developer',
    email: 'prabhat@gmail.com',
    phone: '535435435',
    address: 'Pune',
  },
  {
    id: '3',
    fname: 'Anvi',
    lname: 'Bhovi',
    designation: 'Application Developer',
    email: 'anvi@gmail.com',
    phone: '113423423',
    address: 'Bangalore',
  },
];

const DashboardPage = () => {
  return <DashboardTable headers={headers} rows={rows} />
}
export default DashboardPage
