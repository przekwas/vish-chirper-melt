import { useState } from 'react';
import { useForm } from '../hooks/useForm';
import { Button, Modal } from 'react-bootstrap';

const ChirpModal = ({ show, chirpContentRef, handlers }) => {
	const { values, handleChanges, handleSubmit, clear } = useForm(handleChirp);
	const [chirpContentPlaceholder, setChirpContentPlaceholder] = useState('');

	function handleChirp () {
		const { username, content } = values;
		if (username && content !== '') {
			handlers.updateChirps({
				username,
				content
			});
			clear();
		} else {
			setChirpContentPlaceholder(
				'Please make sure you have set your username and provided Chrip content.'
			);
		}
	};

	return (
		<Modal show={show} onHide={handlers.handleClose}>
			<Modal.Header>
				<Modal.Title>What's happening?</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<textarea
					className="form-control border-0"
					id="chirpContent"
					rows="3"
					ref={chirpContentRef}
					onChange={handleChanges}
					placeholder={chirpContentPlaceholder}
					value={values.content || ''}
					name="content"
				/>
			</Modal.Body>
			<Modal.Footer className="justify-content-between">
				<div className="input-group w-50">
					<span className="input-group-text" id="basic-addon1">
						@
					</span>
					<input
						id="username"
						type="text"
						className="form-control"
						placeholder="Username"
						aria-label="Username"
						onChange={handleChanges}
						value={values.username || ''}
						name="username"
					/>
				</div>
				<form className="d-flex">
					<Button variant="secondary" className="me-2" onClick={handlers.handleClose}>
						Cancel
					</Button>
					<Button variant="primary" type="submit" onClick={handleSubmit}>
						Chirp
					</Button>
				</form>
				{chirpContentPlaceholder && (
					<small className="text-danger">{chirpContentPlaceholder}</small>
				)}
			</Modal.Footer>
		</Modal>
	);
};

export default ChirpModal;
