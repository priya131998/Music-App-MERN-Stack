import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import AddAlbumPage from '../AddAlbumPage/AddAlbumPage';
import EditAlbumPage from '../EditAlbumPage/EditAlbumPage';
import AlbumDetailPage from '../AlbumDetailPage/AlbumDetailPage';
import AlbumListPage from '../AlbumListPage/AlbumListPage';
import NavBar from '../../components/NavBar/NavBar';
import * as albumAPI from '../../utilities/albums-api';

import './App.css';

function App(props) {
	const [user, setUser] = useState(getUser());
	const[albums, setAlbums] = useState([]);
	const history = useHistory();
  
	useEffect(() => {
		  async function getAlbums() {
			  // retrieve the puppies data
			  const albums = await albumAPI.getAll();
			  // set it to state
			  setAlbums(albums);
		  }
		  getAlbums();
	  }, []);
  
	  useEffect(() => {
		  // This is listenting for each time puppies state is changed,
		  // then will run our function below to reroute
		  history.push('/');
	  }, [albums, history]);
  
	  async function handleAddAlbum(newAlbumData) {
		  const newAlbum = await albumAPI.create(newAlbumData);
		  setAlbums([...albums, newAlbum]);
	  }
  
	async function handleUpdateAlbum(updatedAlbumData) {
		  // invoke the fetch call from api services
		  const updatedAlbum = await albumAPI.update(updatedAlbumData);
		  // set the new state using the result from the fetch call
		  const newAlbumsArray = albums.map(a =>
			  a._id === updatedAlbum._id ? updatedAlbum : a
		  );
		  setAlbums(newAlbumsArray);
	  }
  
	  async function handleDeleteAlbum(id) {
		  await albumAPI.deleteOne(id);
		  setAlbums(albums.filter(album => album._id !== id));
	  }
  
	//   async function hiddenButtons(props) {
	// 	  const isLoggedIn = props.isLoggedIn;
	// 	  if (isLoggedIn) {
	// 		  return (
	// 		  <div>
	// 		  <handleUpdateAlbum />;
	// 		  <handleDeleteAlbum />
	// 		  </div>
	// 		  )

	// 	  }
  
			  
	// 	  }
	  

  
	return (
	<div className='App'>
			  <header className='App-header'>
				  React Album CRUD
			  </header>
		<main>
	   {/* { user ? ( */}
		<>
		<NavBar user={user} setUser={setUser} />
		  <Switch>
		  <Route exact path='/'>
		  <AlbumListPage
						  albums={albums}
						  handleDeleteAlbum={handleDeleteAlbum}
						  user = {user}
					  />
				  </Route>
					  <Route exact path='/add'>
					  <AddAlbumPage handleAddAlbum={handleAddAlbum} user={user}/>
				  </Route>
				  
				  <Route exact path='/details'>
					  <AlbumDetailPage />
				  </Route>
		  <Route exact path='/edit'>
					  <EditAlbumPage handleUpdateAlbum={handleUpdateAlbum} />
				  </Route>
				  <Route exact path='/signup'>
					  <AuthPage setUser={setUser} />
				  </Route>
			<Redirect to="/albums" />
		  </Switch>
		  </>
		  {/* ) : (
			<AuthPage setUser={setUser} />
		  )} */}
		</main>
		</div>
	);
  
  }
  
  export default App;
  