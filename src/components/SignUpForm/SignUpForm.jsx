// import { useState } from 'react';
// import { signUp } from '../../utilities/users-service';
// import { useHistory } from "react-router-dom";


// // export default class SignUpForm extends Component {
// // 	// history = useHistory();
// // 	state = {
// 		// name: '',
// 		// email: '',
// 		// password: '',
// 		// confirm: '',
// 		// error: '',
// // 	};

// export default function SignUpForm({ setUser }) {
// 	const [credentials, setCredentials] = useState({
// 		name: '',
// 		email: '',
// 		password: '',
// 		confirm: '',
// 		error: '',
// });

// 	// export default function LogIn({ setUser }) {
// 	// 	const [credentials, setCredentials] = useState({
// 	// 		email: '',
// 	// 		password: '',
// 	// 	});

	
// 	// The object passed to setState is merged with the current state
// 	// handleChange = evt => {
// 	// 	this.setState({
// 	// 		[evt.target.name]: evt.target.value,
// 	// 		error: '',
// 	// 	});
// 	// };

// 	// handleSubmit = async evt => {
// 	// 	evt.preventDefault();
// 	// 	try {
// 	// 		// We don't want to send the 'error' or 'confirm' property,
// 	// 		//  so let's make a copy of the state object, then delete them
// 	// 		const formData = { ...this.state };
// 	// 		delete formData.error;
// 	// 		delete formData.confirm;

// 	// 		// The promise returned by the signUp service method
// 	// 		// will resolve to the user object included in the
// 	// 		// payload of the JSON Web Token (JWT)
// 	// 		const user = await signUp(formData);
// 	// 		this.props.setUser(user);
// 	// 		// history.push("/");
// 	// 	} catch {
// 	// 		// An error occured
// 	// 		this.setState({ error: 'Sign Up Failed - Try Again' });
// 	// 	}
// 	// };

// 	const [error, setError] = useState('');
// 	let history = useHistory();
// 	function handleChange(evt) {
// 		setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
// 		setError('');
// 	}
// 	async function handleSubmit(evt) {
// 		// Prevent form from being submitted to the server
// 		evt.preventDefault();
// 		try {
// 			// The promise returned by the signUp service method
// 			// will resolve to the user object included in the
// 			// payload of the JSON Web Token (JWT)
// 			const user = await signUp.login(credentials);
// 			setUser(user);
// 			history.push("/");
// 		} catch {
// 			setError('Log In Failed - Try Again');
// 		}
// 	}

// 	// // render();
// 	//  {
// 	// 	const disable = this.state.password !== this.state.confirm;
// 	// 	return (
// 	// 		<div>
// 	// 			<div className='form-container'>
// 	// 				<form autoComplete='off' onSubmit={this.handleSubmit}>
// 	// 					<label>Name</label>
// 	// 					<input
// 	// 						type='text'
// 	// 						name='name'
// 	// 						value={this.state.name}
// 	// 						onChange={this.handleChange}
// 	// 						required
// 	// 					/>
// 	// 					<label>Email</label>
// 	// 					<input
// 	// 						type='email'
// 	// 						name='email'
// 	// 						value={this.state.email}
// 	// 						onChange={this.handleChange}
// 	// 						required
// 	// 					/>
// 	// 					<label>Password</label>
// 	// 					<input
// 	// 						type='password'
// 	// 						name='password'
// 	// 						value={this.state.password}
// 	// 						onChange={this.handleChange}
// 	// 						required
// 	// 					/>
// 	// 					<label>Confirm</label>
// 	// 					<input
// 	// 						type='password'
// 	// 						name='confirm'
// 	// 						value={this.state.confirm}
// 	// 						onChange={this.handleChange}
// 	// 						required
// 	// 					/>
// 	// 					<button type='submit' disabled={disable}>
// 	// 						SIGN UP
// 	// 					</button>
// 	// 				</form>
// 	// 			</div>
// 	// 			<p className='error-message'>&nbsp;{this.state.error}</p>
// 	// 		</div>
// 	// 	);
// 	// }


// 	//{
// 			const disable = credentials.password !== credentials.confirm;
// 			return (
// 				<div>
// 					<div className='form-container'>
// 						<form autoComplete='off' onSubmit={handleSubmit}>
// 							<label>Name</label>
// 							<input
// 								type='text'
// 								name='name'
// 								value={credentials.name}
// 								onChange={handleChange}
// 								required
// 							/>
// 							<label>Email</label>
// 							<input
// 								type='email'
// 								name='email'
// 								value={credentials.email}
// 								onChange={handleChange}
// 								required
// 							/>
// 							<label>Password</label>
// 							<input
// 								type='password'
// 								name='password'
// 								value={credentials.password}
// 								onChange={handleChange}
// 								required
// 							/>
// 							<label>Confirm</label>
// 							<input
// 								type='password'
// 								name='confirm'
// 								value={credentials.confirm}
// 								onChange={handleChange}
// 								required
// 							/>
// 							<button type='submit' disabled={disable}>
// 								SIGN UP
// 							</button>
// 						</form>
// 					</div>
// 					<p className='error-message'>&nbsp;{error}</p>
// 				</div>
// 			);
// 		//}


// }



import { useState } from 'react';
import { useHistory } from 'react-router';
import { signUp } from '../../utilities/users-service';



export default function SignUpForm({ setUser }) {
    const [signUpData, setSignUpData] = useState({
        name: '',
        email: '',
        password: '',
        confirm: '',
        error: ''
    })
    let history = useHistory();
    function handleChange(evt) {
        setSignUpData({
            ...signUpData,
            [evt.target.name]: evt.target.value,
            error: ''
        });
    };
    async function handleSubmit(evt) {
        evt.preventDefault();
        try {
            const formData = { ...signUpData };
            delete formData.error;
            delete formData.confirm;
            const user = await signUp(formData);
            setUser(user)
            history.push('/');
        } catch {
            setSignUpData({ ...signUpData, error: 'Sign Up Failed - Try Again' })
        }
    };
    return (
        <div>
            <div className="form-container">
                <form autoComplete="off" onSubmit={handleSubmit}>
                    <label>Name</label>
                    <input type="text" name="name" value={signUpData.name} onChange={handleChange} required />
                    <label>Email</label>
                    <input type="email" name="email" value={signUpData.email} onChange={handleChange} required />
                    <label>Password</label>
                    <input type="password" name="password" value={signUpData.password} onChange={handleChange} required />
                    <label>Confirm</label>
                    <input type="password" name="confirm" value={signUpData.confirm} onChange={handleChange} required />
                    <button type="submit" disabled={signUpData.password !== signUpData.confirm}>SIGN UP</button>
                </form>
            </div>
            <p className="error-message">&nbsp;{signUpData.error}</p>
        </div>
    );
}