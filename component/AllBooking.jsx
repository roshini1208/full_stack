// src/component/AllBooking.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import { Table, TableBody, TableCell, TableHead, TableRow, Paper } from '@mui/material';

const AllBooking = () => {
  const events = useSelector((state) => state.events);

  return (
    <Paper style={{ margin: '20px', padding: '20px' }}>
      <h2>All Bookings</h2>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Event Type</TableCell>
            <TableCell>Head Count</TableCell>
            <TableCell>Charges</TableCell>
            <TableCell>Submission Date</TableCell>
            <TableCell>Event Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {events.map((event, index) => (
            <TableRow key={index}>
              <TableCell>{event.type}</TableCell>
              <TableCell>{event.desc}</TableCell>
              <TableCell>{event.packages}</TableCell>
              <TableCell>{event.count}</TableCell>
              <TableCell>{event.charges}</TableCell>
              <TableCell>{event.submissionDate ? event.submissionDate.format('DD/MM/YYYY') : ''}</TableCell>
              <TableCell>{event.eventDate ? event.eventDate.format('DD/MM/YYYY') : ''}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default AllBooking;
