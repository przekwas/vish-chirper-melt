import { Container, Button } from 'react-bootstrap';

const Nav = ({ handleShow }) => {
	return (
		<nav className="navbar sticky-top navbar-dark bg-info p-3 mb-5">
			<div className="container-fluid">
				<a href="#" className="navbar-brand">
					🐦 Chirper
				</a>
				<div className="d-flex">
					<Button variant="warning" onClick={handleShow}>
						Chirp
					</Button>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
