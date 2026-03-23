import { useState } from 'react';
import { Form } from "react-router";

export default function SignUpForm() {
    const [formData, setFormData] = useState({
        fName: '',
        lName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
        

        if (!formData.fName) newErrors.fName = 'First name is required';
        if (!formData.lName) newErrors.lName = 'Last name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.password) newErrors.password = 'Password is required';
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            console.log('Form submitted:', formData);
            // Handle sign up logic here
        }
    };

    return (
        <Form onSubmit={handleSubmit} method="post"className="sign-up-form">
            <div className="form-group">
                <label htmlFor="fName">First Name</label>
                <input
                    type="text"
                    id="fName"
                    name="fName"
                    value={formData.fName}
                    onChange={handleChange}
                />
                {errors.fName && <span className="error">{errors.fName}</span>}
            </div>

            <div className="form-group">
                <label htmlFor="lName">Last Name</label>
                <input
                    type="text"
                    id="lName"
                    name="lName"
                    value={formData.lName}
                    onChange={handleChange}
                />
                {errors.lName && <span className="error">{errors.lName}</span>}
            </div>

            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                {errors.email && <span className="error">{errors.email}</span>}
            </div>

            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
                {errors.password && <span className="error">{errors.password}</span>}
            </div>

            <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                />
                {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
            </div>

            <button type="submit">Sign Up</button>
        </Form>
    );
}