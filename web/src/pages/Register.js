import "./Register.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
	return (
		<div className="register-page">
			<div className="register-information">
				<div style={{ height: "10%" }} />
				<div id="register-information-title">Developer Maker</div>
				<div id="register-information-subtitle">
					Improve Your Algorithm Skill
				</div>
				<div style={{ height: "50%" }} />
			</div>
			<div className="register-form">
				<div id="register-form-title">Register</div>
				<div className="register-form-input">
					<input
						className="register-form-input-component"
						type="text"
						placeholder="Username"
						name="username"
						required
					/>
					<input
						className="register-form-input-component"
						type="text"
						placeholder="Email"
						name="email"
						required
					/>
					<input
						className="register-form-input-component"
						type="password"
						placeholder="Password"
						name="password"
						required
					/>
					<input
						className="register-form-input-component"
						type="password"
						placeholder="Confirm Password"
						name="confirm-password"
						required
					/>
					<input
						className="register-form-input-component"
						type="text"
						placeholder="BOJ ID"
						name="boj-id"
					/>
					<input
						className="register-form-input-component"
						type="text"
						placeholder="Codeforces ID"
						name="codeforces-id"
					/>
					<input
						className="register-form-input-component"
						type="text"
						placeholder="Atcoder ID"
						name="atcoder-id"
					/>
				</div>
				<div className="register-form-terms-and-conditions">
					<input
						className="register-form-terms-and-conditions-component"
						type="checkbox"
						name="terms-and-conditions"
						required
					/>
					<div className="register-form-terms-and-conditions-component">
						<Link to="/terms-and-conditions" target="_blank">
							이용약관
						</Link>
						에 동의합니다.
					</div>
				</div>
				<div className="register-form-button">
					<div className="register-form-button-components" type="submit">
						Sign Up
					</div>
				</div>
			</div>
		</div>
	);
}

export default Register;
