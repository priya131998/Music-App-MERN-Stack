import { Link } from 'react-router-dom';
// We can call any exported function with this import as userService
import * as usersService from '../../utilities/users-service';

function NavBar({ user, setUser }) {
	// Add the following function
	function handleLogOut() {
		// Delegate to the users-service
		usersService.logOut();
		// Update the state will also cause a re-render
		setUser(null);
	}

	return (
		<nav>
			<Link to='/'>Album List</Link>
			&nbsp; | &nbsp;
			<Link to={user ? '/add' : '/signup'}>Add Album</Link>
			&nbsp; | &nbsp;
			
			<span>
				<b>Hello, {user && user.name}</b>
			</span>
			&nbsp; | &nbsp;
			{ user ? 
			<Link to='' onClick={handleLogOut}>
				Log Out
			</Link>
			:
			<Link to='/signup'>Sign Up/ Log In</Link>
			}
		</nav>
	);
}

export default NavBar;
