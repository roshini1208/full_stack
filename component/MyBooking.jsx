// src/component/MyBooking.jsx
import React, { useState, useEffect } from 'react';
import { Paper, TextField, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addEvent } from './EventSlice1';
import { useNavigate } from 'react-router-dom';
import './MyBooking.css';
import NavbarUser from './NavbarUser';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

const MyBooking = () => {
  const [formData, setFormData] = useState({
    id: Date.now(), // Unique identifier
    type: '',
    desc: '',
    packages: '',
    count: '',
    charges: '',
    submissionDate: null,
    eventDate: null,
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    // Reset the dates when the component is mounted
    setFormData((prevFormData) => ({
      ...prevFormData,
      submissionDate: null,
      eventDate: null,
    }));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const handleDateChange = (name, date) => {
    setFormData({
      ...formData,
      [name]: date,
    });
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.type) newErrors.type = '*Name is required';
    if (!formData.desc) newErrors.desc = '*Description is required';
    if (!formData.packages) newErrors.packages = '*Event Type is required';
    if (!formData.count) newErrors.count = '*Head Count is required';
    if (!formData.charges) newErrors.charges = '*Charges is required';
    if (!formData.submissionDate) newErrors.submissionDate = '*Submission Date is required';
    if (!formData.eventDate) newErrors.eventDate = '*Event Date is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Dispatch the action to add the event
      dispatch(addEvent(formData));
      setFormData({
        id: Date.now(), // Ensure a new unique identifier
        type: '',
        desc: '',
        packages: '',
        count: '',
        charges: '',
        submissionDate: null,
        eventDate: null,
      });
      setErrors({});
      navigate('/allbooking');  // Navigate to the page where all events are listed
    }
  };

  return (
    <div>
      <NavbarUser />
      <div className='sri' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '130vh' }}>
        <Paper elevation={10} style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 3)', backdropFilter: 'blur(10px)', padding: '20px', maxWidth: '400px', width: '100%' }}>
          <form onSubmit={handleSubmit}>
            <h1 style={{ color: 'rgb(24, 24, 24)', textAlign: 'center' }}>Booking Form</h1>
            <TextField label="Name" type="text" name="type" value={formData.type} onChange={handleChange} fullWidth />
            <div>{errors.type && <div style={{ color: 'red' }}>{errors.type}</div>}</div>
            <br />
            <TextField label="Description" type="text" name="desc" value={formData.desc} onChange={handleChange} fullWidth />
            <div>{errors.desc && <div style={{ color: 'red' }}>{errors.desc}</div>}</div>
            <br />
            <TextField label="Event Type" type="text" name="packages" value={formData.packages} onChange={handleChange} fullWidth />
            <div>{errors.packages && <div style={{ color: 'red' }}>{errors.packages}</div>}</div>
            <br />
            <TextField label="Head Count" type="text" name="count" value={formData.count} onChange={handleChange} fullWidth />
            <div>{errors.count && <div style={{ color: 'red' }}>{errors.count}</div>}</div>
            <br />
            <TextField label="Charges" name="charges" type="text" value={formData.charges} onChange={handleChange} fullWidth />
            <div>{errors.charges && <div style={{ color: 'red' }}>{errors.charges}</div>}</div>
            <br />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Submission Date"
                value={formData.submissionDate}
                onChange={(date) => handleDateChange('submissionDate', date)}
                renderInput={(params) => <TextField {...params} fullWidth />}
              />
            </LocalizationProvider>
            <div>{errors.submissionDate && <div style={{ color: 'red' }}>{errors.submissionDate}</div>}</div>
            <br />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Event Date"
                value={formData.eventDate}
                onChange={(date) => handleDateChange('eventDate', date)}
                renderInput={(params) => <TextField {...params} fullWidth />}
              />
            </LocalizationProvider>
            <div>{errors.eventDate && <div style={{ color: 'red' }}>{errors.eventDate}</div>}</div>
            <br />
            <Button type="submit" variant="contained" color="secondary" fullWidth>
              Add Booking
            </Button>
          </form>
        </Paper>
      </div>
    </div>
  );
};

export default MyBooking;
