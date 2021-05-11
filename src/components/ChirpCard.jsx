import moment from 'moment';
import { Card } from 'react-bootstrap';

const ChirpCard = ({ val }) => {
	return (
		<Card  className="rounded-3 mb-3">
			<Card.Body>
				<Card.Title>@{val.username.toLowerCase()}</Card.Title>
				<Card.Text>{val.content}</Card.Text>
				<Card.Text>
					<small className="text-muted">{moment(val.date).calendar()}</small>
				</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default ChirpCard;
