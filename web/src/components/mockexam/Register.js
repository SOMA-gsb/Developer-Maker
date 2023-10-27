import Details from './Details';
import './Register.css'

function Register() {
    return (
        <div className="register-wrapper">
            <div className='register-title'>
                <div className='register-title-contents'>
                    <div className='register-maintitle'>Exam: the 2nd week of September</div>
                    <div className='register-subtitle'>
                        <b>Level</b> Gray to Blue
                    </div>
                </div>
                <div className='register-btn'>REGISTER</div>
            </div>
            <Details />
        </div>
    );
};

export default Register;