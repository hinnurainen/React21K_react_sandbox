import React from 'react';
import './Form.css';

const Form = () => {
    return (
        <div className="form-group">
            <form>
                <label for="First name">First name</label>
                <input type="text" name="firstname" id="firstname" onChange={this.inputHandler} required />
                <label for="Last name">Last name</label>
                <input type="text" name="lastname" id="lastname" onChange={this.inputHandler} required />
                <label for="Phone number">Phone number</label>
                <input type="number" name="number" id="number" min="10" max="10" onChange={this.inputHandler} required />
                <label for="role">Role</label>
                <select name="role" onChange={this.inputHandler} >
                    <option value="Teacher">Teacher</option>
                    <option value="Student">Student</option>
                    <option value="Other">Other</option>
                </select>
                <textarea cols="30" rows="10" onChange={this.inputHandler} required ></textarea>
                <button type="submit" onClick={this.popupHandler}>Send</button>
            </form>
        </div>
    );
};

export default Form;