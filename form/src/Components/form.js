import React from 'react';
import './Form.css';

const Form = ({ submit, change }) => {
    return (
        <div className="form-group">
            <form onSubmit={submit}>
                <label htmlFor="First name">First name</label>
                <input type="text" name="firstname" id="firstname" onChange={change} required />
                <label htmlFor="Last name">Last name</label>
                <input type="text" name="lastname" id="lastname" onChange={change} required />
                <label htmlFor="Phone number">Phone number</label>
                <input type="number" name="number" id="number" onChange={change} required />
                <label htmlFor="role">Role</label>
                <select name="role" onChange={change} >
                    <option value="Teacher">Teacher</option>
                    <option value="Student">Student</option>
                    <option value="Other">Other</option>
                </select>
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" cols="30" rows="10" onChange={change} required ></textarea>
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default Form;