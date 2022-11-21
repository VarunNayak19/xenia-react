import React from 'react'
import './signin.css'
import { TextField, Button } from '@mui/material';
import { useFormik } from 'formik';

const Signin = () => {

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        }
    })
    console.log(formik.values)

    return (
        <>
            <div className='signInContainer'>
                <img src={require("../../assets/logo_216x40.png")} alt="testCoach" className='testCoachLogo' />
                <div className='sectionLeft'>
                    <p className='line1'>Practicing with <span className='boldify'> Quality Mock Test  </span>
                        Enhances your performance by <span className='boldify'>36%</span>
                    </p>
                    <p>
                        Changing the traditional ways – Practice Smartly. Succeed Simply
                        Read from book → Answer on App → Evaluate Instantly.
                    </p>
                </div>
                <div className='sectionRight'>
                    <form className='signInForm'>
                        <div className='signinFormHeading'><h2>Sign In</h2></div>
                        <TextField id="standard-basic" name="email" type="email" label="Email" variant="standard" sx={{
                            width: '1'
                        }} value={formik.values.email}
                            onChange={formik.handleChange} />
                        <TextField id="standard-basic" name="password" type="password" label="Password" variant="standard" sx={{
                            width: '1'
                        }} value={formik.values.password}
                            onChange={formik.handleChange} />
                        <Button variant="contained" sx={{
                            width: '1',
                            height: '50px',
                            fontSize: '20px',
                            textTransform: 'capitalize'
                        }}>Login</Button>
                        <p>Forgot Password?</p>
                        <p>Don't have an Account?<span>Sign up</span></p>

                    </form>
                </div>
            </div>
        </>
    )
}

export default Signin