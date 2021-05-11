import React, { useState, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

import GlobalStyle from './theme/globalStyles';
import { Container } from 'react-bootstrap';
import { Nav, ChirpModal, ChirpsTimeline } from './components';

const initChirps = [
	{
		key: uuidv4(),
		username: 'Leonardo',
		content: `I'm going to order a pizza 🍕`,
		date: 1620274875000
	},
	{
		key: uuidv4(),
		username: 'Michaelangelo',
		content: `Cowabunga 🐢`,
		date: 1620278475000
	},
	{
		key: uuidv4(),
		username: 'Raphael',
		content: `Duuuuuude! 🤘`,
		date: 1620279615000
	}
];

const App = () => {
	const [chirps, setChirps] = useState(initChirps);

	const [show, setShow] = useState(false);
	const chirpContentRef = useRef(null);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const updateChirps = newChirp => {
		setShow(false);
		setChirps(chirps => [
			...chirps,
			{
				...newChirp,
				key: uuidv4(),
				date: Date.now()
			}
		]);
	};

	useEffect(() => {
		if (show && chirpContentRef.current) {
			chirpContentRef.current.focus();
		}
	}, [show]);

	return (
		<>
			<GlobalStyle />
			<Nav handleShow={handleShow} />
			<Container>
				<ChirpsTimeline chirps={chirps} />
			</Container>
			<ChirpModal
				show={show}
				chirpContentRef={chirpContentRef}
				handlers={{ updateChirps, handleClose }}
			/>
		</>
	);
};

export default App;
