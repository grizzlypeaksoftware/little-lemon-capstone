import React, { useState } from 'react';

function BookingForm(props) {
  let today = new Date()
  let todayString = today.toISOString().split('T')[0];

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    numberOfPeople: '',
    date: todayString,
    time: '',
    occasion: '',
    seatingPreferences: '',
    comments: ''
  });

  const [formErrors, setFormErrors] = useState({});

  const [availableTimes, setAvailableTimes] = useState(
    props.availableTimes.map((times) => <option key={times} value={times} />)
  );

  const handleChange = (event) => {
    console.log("handleChange");
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (event) =>{
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    var stringify = event.target.value;
    const date = new Date(stringify);
    props.updateAvailableTimes(date);

    setAvailableTimes(props.availableTimes.map((times) => <option key={times} value={times} />));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      console.log('Form submitted:', formData);
      props.submitForm(formData);
      window.location.href="/confirmation";

      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        numberOfPeople: '',
        date: '',
        time: '',
        occasion: '',
        seatingPreferences: '',
        comments: ''
      });

    } else {
      setFormErrors(errors);
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.firstName) {
      errors.firstName = 'First name is required';
    }
    if (!formData.lastName) {
      errors.lastName = 'Last name is required';
    }
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.phoneNumber) {
      errors.phoneNumber = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      errors.phoneNumber = 'Phone number is invalid';
    }
    if (!formData.numberOfPeople) {
      errors.numberOfPeople = 'Number of people is required';
    } else if (!/^\d+$/.test(formData.numberOfPeople)) {
      errors.numberOfPeople = 'Number of people is invalid';
    }
    if (!formData.date) {
      errors.date = 'Date is required';
    }
    if (!formData.time) {
      errors.time = 'Time is required';
    }
    return errors;
  };

  return (
    <div className='reservation-form'>
      <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="firstName">First Name:</label>
        </div>
        <div>
            <input type="text" name="firstName" id="firstName" value={formData.firstName} onChange={handleChange} />
        </div>
        {formErrors.firstName && <div className="error">{formErrors.firstName}</div>}
        <div>
            <label htmlFor="lastName">Last Name:</label>
        </div>
        <div>
            <input type="text" name="lastName" id="lastName" value={formData.lastName} onChange={handleChange} />
        </div>
        {formErrors.lastName && <div className="error">{formErrors.lastName}</div>}
        <div>
            <label htmlFor="email">Email:</label>
        </div>
        <div>
            <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} />
        </div>
        {formErrors.email && <div className="error">{formErrors.email}</div>}
        <div>
            <label htmlFor="phoneNumber">Phone Number:</label>
        </div>
        <div>
            <input type="text" name="phoneNumber" id="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
        </div>
        {formErrors.phoneNumber && <div className="error">{formErrors.phoneNumber}</div>}
        <div>
            <label htmlFor="numberOfPeople">Number of People:</label>
        </div>
        <div>
            <input type="number" name="numberOfPeople" id="numberOfPeople" value={formData.numberOfPeople} onChange={handleChange} />
        </div>
        {formErrors.numberOfPeople && <div className="error">{formErrors.numberOfPeople}</div>}
        <div>
            <label htmlFor="date">Date:</label>
        </div>
        <div>
            <input type="date" name="date" id="date" role="date-field" value={formData.date} onChange={handleDateChange} />
        </div>
        {formErrors.date && <div className="error">{formErrors.date}</div>}
        <div>
            <label htmlFor="time">Time:</label>
        </div>
        <div>
            <input type="time" name="time" id="time" list="time-list" onChange={handleChange} />
            <datalist id="time-list" role="time-list">
              {availableTimes}
            </datalist>
        </div>
        {formErrors.time && <div className="error">{formErrors.time}</div>}
        <div>
            <label htmlFor="occasion">Occasion:</label>
        </div>
        <div>
            <select
            id="occasion"
            value={formData.occasion}
            onChange={handleChange}
            >
                <option>None</option>
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Engagement</option>
                <option>Other</option>
            </select>
        </div>
        <div>
            <label htmlFor="seatingPreferences">Seating Preferences:</label>
        </div>
        <div>
            <select
            id="preferences"
            value={formData.seatingPreferences}
            onChange={handleChange}
            >
            <option>None</option>
            <option>Indoors</option>
            <option>Outdoor (Patio)</option>
            <option>Outdoor (Sidewalk)</option>
            </select>
        </div>
        <div>
            <label htmlFor="comments">Comments:</label>
        </div>
        <div>
            <textarea
            id="comments"
            rows={8}
            cols={50}
            placeholder="Additional Comments"
            value={formData.comments}
            onChange={handleChange}
            ></textarea>
        </div>
        
        <div>
            <button aria-label="Reserve a Table" className="primary" type="submit" role="button">Book Now</button>
        </div>
    </form>
</div>
  );
}
export default BookingForm;