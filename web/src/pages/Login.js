import "./Login.css";
import "./Login-and-Register.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Google, Github, Naver, Kakao } from "../assets/SSO-Logos";
function Login() {
	return (
		<div className="login-page">
			<div className="DM-information">
				<div style={{ height: "10%" }} />
				<div id="DM-information-title">Developer Maker</div>
				<div id="DM-information-subtitle">Improve Your Algorithm Skill</div>
				<div style={{ height: "50%" }} />
			</div>
			<div className="DM-form">
				<div id="DM-form-title">Login</div>
				<div className="DM-form-input">
					<input
						className="DM-form-input-component"
						type="text"
						placeholder="Email ID"
						name="Email ID"
						required
					/>
					<input
						className="DM-form-input-component"
						type="password"
						placeholder="Password"
						name="password"
						required
					/>
				</div>
				<div className="DM-form-button">
					<div className="DM-form-button-components" type="submit">
						Login
					</div>
				</div>
				<div className="login-SSO">
					<div id="login-SSO-line">
						<div id="login-SSO-line-left" />
						<div id="login-SSO-text">or login with</div>
						<div id="login-SSO-line-right" />
					</div>
					<div className="login-SSO-button">
						<img
							className="login-SSO-button-components"
							type="submit"
							alt="Google"
							src={Google}
						/>
						<img
							className="login-SSO-button-components"
							type="submit"
							alt="Github"
							src={Github}
						/>
						<img
							className="login-SSO-button-components"
							type="submit"
							alt="Naver"
							src={Naver}
						/>
						<img
							className="login-SSO-button-components"
							type="submit"
							alt="Kakao"
							src={Kakao}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;
