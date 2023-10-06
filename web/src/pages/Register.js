import "./Register.css";
import "./Login-and-Register.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
	return (
		<div className="register-page">
			<div className="DM-information">
				<div style={{ height: "10%" }} />
				<div id="DM-information-title">Developer Maker</div>
				<div id="DM-information-subtitle">Improve Your Algorithm Skill</div>
				<div style={{ height: "50%" }} />
			</div>
			<div className="DM-form">
				<div id="DM-form-title">Register</div>
				<div className="DM-form-input">
					<input
						className="DM-form-input-component"
						type="text"
						placeholder="Username"
						name="username"
						required
					/>
					<input
						className="DM-form-input-component"
						type="text"
						placeholder="Email"
						name="email"
						required
					/>
					<input
						className="DM-form-input-component"
						type="password"
						placeholder="Password"
						name="password"
						required
					/>
					<input
						className="DM-form-input-component"
						type="password"
						placeholder="Confirm Password"
						name="confirm-password"
						required
					/>
					<input
						className="DM-form-input-component"
						type="text"
						placeholder="BOJ ID"
						name="boj-id"
					/>
					<input
						className="DM-form-input-component"
						type="text"
						placeholder="Codeforces ID"
						name="codeforces-id"
					/>
					<input
						className="DM-form-input-component"
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
				<div className="DM-form-button">
					<div className="DM-form-button-components" type="submit">
						Sign Up
					</div>
				</div>
			</div>
		</div>
	);
}

export default Register;
