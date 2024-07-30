import React, { useState } from 'react';
import { Paper, TextField, Button, Box, InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './Logo.css';
import axios from 'axios';

const Signin = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    pass: '',
    password: '',
    Cpassword: '',
    Rpassword: ''
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleRoleChange = (event) => {
    setFormData({
      ...formData,
      Rpassword: event.target.value
    });
    if (errors.Rpassword) {
      setErrors({
        ...errors,
        Rpassword: ''
      });
    }
  };

  const validate = () => {
    const newErrors = {};
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!formData.name) newErrors.name = '*Name is required';
    if (!formData.email) newErrors.email = '*Email is required';
    if (!formData.pass) newErrors.pass = '*Phone Number is required';
    if (!formData.password) {
      newErrors.password = '*Password is required';
    } else if (!passwordPattern.test(formData.password)) {
      newErrors.password = '*Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character';
    }
    if (!formData.Cpassword) newErrors.Cpassword = '*Confirm Password is required';
    if (formData.password && formData.Cpassword && formData.password !== formData.Cpassword) {
      newErrors.Cpassword = '*Passwords do not match';
    }
    if (!formData.Rpassword) newErrors.Rpassword = '*Role is required';

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      try {
        await axios.post('http://localhost:3001/posts', {
          email: formData.email,
          password: formData.password,
          role: formData.Rpassword,
        });
        setFormData({
          name: '',
          email: '',
          pass: '',
          password: '',
          Cpassword: '',
          Rpassword: ''
        });
        setErrors({});
        navigate('/signin');  // Adjust the navigation path as needed
      } catch (error) {
        console.error('There was an error making the request:', error);
      }
    }
  };

  return (
    <div className='sri' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div elevation={10} style={{ boxShadow:' 0 4px 8px rgba(0, 0, 0, 2)', padding: '20px', maxWidth: '400px', width: '100%' }}>
        <form onSubmit={handleSubmit}>
          <h1 style={{ color: 'rgb(24, 24, 24)', textAlign: 'center' }}>Signin Page</h1>
          <TextField label="Username" type="text" name="name" value={formData.name} onChange={handleChange} fullWidth />
          <div>{errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}</div>
          <br />
          <TextField label="Email" type="email" name="email" value={formData.email} onChange={handleChange} fullWidth />
          <div>{errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}</div>
          <br />
          <TextField label="Phone Number" name="pass" type="text" value={formData.pass} onChange={handleChange} fullWidth />
          <div>{errors.pass && <div style={{ color: 'red' }}>{errors.pass}</div>}</div>
          <br />
          <TextField label="Password" type="password" name="password" value={formData.password} onChange={handleChange} fullWidth />
          <div>{errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}</div>
          <br />
          <TextField label="Confirm Password" type="password" name="Cpassword" value={formData.Cpassword} onChange={handleChange} fullWidth />
          <div>{errors.Cpassword && <div style={{ color: 'red' }}>{errors.Cpassword}</div>}</div>
          <br />
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="role-label">Role</InputLabel>
              <Select
                labelId="role-label"
                id="role-select"
                name="Rpassword"
                value={formData.Rpassword}
                label="Role"
                onChange={handleRoleChange}
              >
                <MenuItem value="User">User</MenuItem>
                <MenuItem value="Admin">Admin</MenuItem>
              </Select>
            </FormControl>
          </Box>
          {errors.Rpassword && <div style={{ color: 'red' }}>{errors.Rpassword}</div>}
          <br />
          <Button type="submit" variant="contained" color="secondary" fullWidth>
            Signin
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
