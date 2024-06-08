import React, { useState } from 'react'
import { BrowserRouter as Link } from 'react-router-dom'
import './SignUpComponent.css'
import scattered_files from '../../img/scattered_files_man_blue.png'

function SignUpComponent() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const validate = () => {
    let errors = {}
    if (!formData.firstName) errors.firstName = 'First name is required'
    if (!formData.lastName) errors.lastName = 'Last name is required'
    if (!formData.email) {
      errors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email address is invalid'
    }
    if (!formData.password) {
      errors.password = 'Password is required'
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters'
    }
    return errors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validate()
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true)
      try {
        const response = await axios.post('https://your-backend-url.com/signup', formData, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        if (response.status === 200) {
          setSubmitMessage('Sign up successful!');
          navigate('/') // Redirect to the My-Drive-Page <3
        } else {
          setSubmitMessage('Sign up failed. Please try again.');
        }
      } catch (error) {
        setSubmitMessage('An error occurred. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    }
  }
  return (
    <>
      <div className='container'>
        <div className='sign-up-left'>
          <h1>Organize, Store & Share</h1>
          <h3>your files with TruDrive!</h3>
          <img
            src={scattered_files}
            alt=''
          />
        </div>
        <div className='sign-up-form'>
          <div className='form-container'>
            <h1>Create Account</h1>
            {/* <p>Organize, Store & Share your files with TruDrive!</p> */}
            <form onSubmit={handleSubmit}>
              <div className='first-last-name-field'>
                <div
                  className='form-group'
                  id='first-name-field'
                >
                  <label>First Name</label>
                  <input
                    type='text'
                    name='firstName'
                    placeholder='First name'
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                  {errors.firstName && (
                    <span class='error-message'>{errors.firstName}</span>
                  )}
                </div>
                <div
                  className='form-group'
                  id='last-name-field'
                >
                  <label>Last Name</label>
                  <input
                    type='text'
                    name='lastName'
                    placeholder='Last name'
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                  {errors.lastName && (
                    <span class='error-message'>{errors.lastName}</span>
                  )}
                </div>
              </div>
              <div className='form-group'>
                <label>Email</label>
                <input
                  type='email'
                  name='email'
                  placeholder='Email id'
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <span class='error-message'>{errors.email}</span>
                )}
              </div>
              <div className='form-group'>
                <label>Password</label>
                <input
                  type='password'
                  name='password'
                  placeholder='Password'
                  value={formData.password}
                  onChange={handleChange}
                />
                {errors.password && (
                  <span class='error-message'>{errors.password}</span>
                )}
              </div>
              <button
                type='submit'
                className='submit-button'
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Sign Up'}
              </button>
              {submitMessage && (
                <span className='submit-message'>{submitMessage}</span>
              )}
              <span className='existing-account'>
                Already have an account? <span className='log-in'>Log in</span>
              </span>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
export default SignUpComponent
