import React from 'react';
import MemeForm from './MemeForm';
import Meme from './Meme';
import { useDispatch, useSelector } from 'react-redux';
import useLocalStorageState from './Hooks/useLocalStorageState';
import './App.css';

function App() {
	const memeList = useSelector((store) => store.memes);
	const [ memes, setMemes ] = useLocalStorageState('memes', memeList);
	const dispatch = useDispatch();

	const addMeme = (memeObj) => {
		dispatch({ type: 'ADD', meme: memeObj });
		setMemes((memes) => [ ...memes, memeObj ]);
	};

	const deleteMeme = (memeId) => {
		dispatch({ type: 'DELETE', id: memeId });
		setMemes((memes) => memes.filter((meme) => meme.id !== memeId));
	};

	return (
		<div className="App">
			<h1>MEMIFY</h1>
			<MemeForm add={addMeme} />
			<hr />
			<div className="MemeList container-fluid">
				{memes.map((meme) => (
					<Meme
						key={meme.id}
						topText={meme.topText}
						url={meme.url}
						bottomText={meme.bottomText}
						remove={() => deleteMeme(meme.id)}
					/>
				))}
			</div>
		</div>
	);
}

export default App;
