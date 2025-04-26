import React, { useState } from 'react';
import './App.css'; // You can style it separately if you want

function App() {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    age: '',
    fatherName: '',
    motherName: '',
    city: '',
    state: '',
    country: '',
    college: '',
    semester: '',
    skills: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted successfully!");
  };

  return (
    <div style={{ backgroundColor: '#111', minHeight: '100vh', color: 'red', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <h1 style={{ textAlign: 'center', fontSize: '2.5rem' }}>Student Registration Form</h1>

        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>

        <label>
          Gender:
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </label>

        <label>
          Age:
          <input type="number" name="age" value={formData.age} onChange={handleChange} />
        </label>

        <label>
          Father's Name:
          <input type="text" name="fatherName" value={formData.fatherName} onChange={handleChange} />
        </label>

        <label>
          Mother's Name:
          <input type="text" name="motherName" value={formData.motherName} onChange={handleChange} />
        </label>

        <label>
          City:
          <input type="text" name="city" value={formData.city} onChange={handleChange} />
        </label>

        <label>
          State:
          <input type="text" name="state" value={formData.state} onChange={handleChange} />
        </label>

        <label>
          Country:
          <input type="text" name="country" value={formData.country} onChange={handleChange} />
        </label>

        <label>
          College:
          <input type="text" name="college" value={formData.college} onChange={handleChange} />
        </label>

        <label>
          Semester:
          <input type="text" name="semester" value={formData.semester} onChange={handleChange} />
        </label>

        <label>
          Skills:
          <input type="text" name="skills" value={formData.skills} onChange={handleChange} placeholder="e.g. Java, Python" />
        </label>

        <button type="submit" style={{ marginTop: '10px', padding: '10px', backgroundColor: '#333', color: 'white', border: 'red', cursor: 'pointer' }}>
          Register
        </button>
      </form>
    </div>
  );
}

export default App;