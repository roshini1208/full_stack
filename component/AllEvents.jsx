import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteEvent, editEvent } from './EventSlice1';
import './AllEvents.css';
import NavbarAdmin from './NavbarAdmin';

const AllEvents = () => {
  const events = useSelector((state) => state.events);
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(null);
  const [updatedEvent, setUpdatedEvent] = useState({});

  const handleEdit = (event) => {
    setIsEditing(event.id);
    setUpdatedEvent(event);
  };

  const handleUpdateChange = (e) => {
    const { name, value } = e.target;
    setUpdatedEvent({
      ...updatedEvent,
      [name]: value,
    });
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    dispatch(editEvent({ id: isEditing, updatedEvent }));
    setIsEditing(null);
    setUpdatedEvent({});
  };

  return (
    <div>
         <div>
        <NavbarAdmin/>
        </div>
        <div>
        <hr/>
    <div className="allevents-container">
      <h2>All Events</h2>
      <table className="allevents-table">
        <thead>
          <tr>
            <th>Type</th>
            <th>Description</th>
            <th>Packages</th>
            <th>Count</th>
            <th>Charges</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event.id}>
              {isEditing === event.id ? (
                <>
                  <td>
                    <input
                      type="text"
                      name="type"
                      value={updatedEvent.type}
                      onChange={handleUpdateChange}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="desc"
                      value={updatedEvent.desc}
                      onChange={handleUpdateChange}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="packages"
                      value={updatedEvent.packages}
                      onChange={handleUpdateChange}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="count"
                      value={updatedEvent.count}
                      onChange={handleUpdateChange}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="charges"
                      value={updatedEvent.charges}
                      onChange={handleUpdateChange}
                    />
                  </td>
                  <td>
                    <button onClick={handleUpdateSubmit}>Save</button>
                    <button onClick={() => setIsEditing(null)}>Cancel</button>
                  </td>
                </>
              ) : (
                <>
                  <td>{event.type}</td>
                  <td>{event.desc}</td>
                  <td>{event.packages}</td>
                  <td>{event.count}</td>
                  <td>{event.charges}</td>
                  <td>
                    <button onClick={() => handleEdit(event)}>Edit</button>
                    <button onClick={() => dispatch(deleteEvent(event.id))}>Delete</button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    </div>
  );
};

export default AllEvents;
