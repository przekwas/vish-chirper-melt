import ChirpCard from './ChirpCard';

const ChirpsTimeline = ({ chirps }) => {
	return (
		<div className="row justify-content-center">
			<div className="col-sm-4">
				{chirps.map(val => <ChirpCard key={val.key} val={val} />).reverse()}
			</div>
		</div>
	);
};

export default ChirpsTimeline;