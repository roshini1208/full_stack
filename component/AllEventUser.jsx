import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteEvent, editEvent } from './EventSlice1';
import './AllEventUser.css';
import NavbarUser from './NavbarUser';

const AllEventUser = () => {
    const events = useSelector((state) => state.events);
    return (
        <div>
        <NavbarUser/>
        <div className='Alleventuser_sri'>
      <div className="allevents-container">
        <h1>All Events</h1>
        <table className="allevents-table">
          <thead>
            <tr>
              <th>Type</th>
              <th>Description</th>
              <th>Packages</th>
              <th>Count</th>
              <th>Charges</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event, index) => (
              <tr key={index}>
                <td>{event.type}</td>
                <td>{event.desc}</td>
                <td>{event.packages}</td>
                <td>{event.count}</td>
                <td>{event.charges}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
      </div>
  );
};

export default AllEventUser;
