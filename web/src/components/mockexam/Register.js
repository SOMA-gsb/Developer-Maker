import { useState } from 'react';
import { Link } from 'react-router-dom';
import Details from './Details';
import './Register.css'

function Register() {
    const [register, setRegister] = useState(false);    

    return (
        <div className="register-wrapper">
            <div className='register-title'>
                <div className='register-title-contents'>
                    <div className='register-maintitle'>Exam: the 2nd week of September</div>
                    <div className='register-subtitle'>
                        <b>Level</b> Gray to Blue
                    </div>
                </div>
                {register?
                <Link to="/mockexam/1" className='start-btn'>
                    Start
                </Link>
                :
                <div className='register-btn' onClick={() => setRegister(true)}>
                    Register
                </div>
                }
            </div>
            <Details />
        </div>
    );
};

export default Register;