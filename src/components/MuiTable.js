import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material'
import React from 'react'


//Table helps display sets of data,
//here sorting, filtering and paginating is not done as react table package is preferred
//basic data display

// https://mockaroo.com/


// props: align on tablehead am; stickyHeader for table tor fixed heading while scrolling
const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{maxHeight:'400px'}}>

        <Table aria-label='a table' stickyHeader>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell align='center'>Email</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    tableData.map((row)=>(
                        <TableRow key={row.id} sx={{'&:last-child td, &:last-child th':{border:0}}}>
                            <TableCell>{row.id}</TableCell>
                            <TableCell>{row.first_name}</TableCell>
                            <TableCell>{row.last_name}</TableCell>
                            <TableCell align='center'>{row.email}</TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    </TableContainer>
  )
}

const tableData = [{
    "id": 1,
    "first_name": "Kylie",
    "last_name": "Winckles",
    "email": "kwinckles0@ucla.edu",
    "gender": "Male",
    "ip_address": "111.248.98.105"
  }, {
    "id": 2,
    "first_name": "Orlan",
    "last_name": "Salt",
    "email": "osalt1@symantec.com",
    "gender": "Male",
    "ip_address": "189.95.181.24"
  }, {
    "id": 3,
    "first_name": "Cullin",
    "last_name": "Gregorace",
    "email": "cgregorace2@hp.com",
    "gender": "Genderfluid",
    "ip_address": "11.69.184.151"
  }, {
    "id": 4,
    "first_name": "Rod",
    "last_name": "Orrey",
    "email": "rorrey3@bandcamp.com",
    "gender": "Male",
    "ip_address": "89.230.214.210"
  }, {
    "id": 5,
    "first_name": "Dorena",
    "last_name": "Matson",
    "email": "dmatson4@nytimes.com",
    "gender": "Female",
    "ip_address": "216.101.179.41"
  }, {
    "id": 6,
    "first_name": "Adriena",
    "last_name": "Poker",
    "email": "apoker5@army.mil",
    "gender": "Female",
    "ip_address": "250.111.72.137"
  }, {
    "id": 7,
    "first_name": "Brice",
    "last_name": "Gianetti",
    "email": "bgianetti6@last.fm",
    "gender": "Male",
    "ip_address": "205.132.238.21"
  }, {
    "id": 8,
    "first_name": "Kira",
    "last_name": "Milton-White",
    "email": "kmiltonwhite7@joomla.org",
    "gender": "Female",
    "ip_address": "197.193.131.191"
  }, {
    "id": 9,
    "first_name": "Albina",
    "last_name": "Drewe",
    "email": "adrewe8@jimdo.com",
    "gender": "Female",
    "ip_address": "41.60.244.103"
  }, {
    "id": 10,
    "first_name": "Nils",
    "last_name": "Attack",
    "email": "nattack9@plala.or.jp",
    "gender": "Male",
    "ip_address": "140.215.23.207"
  }]
  
export default MuiTable