import { useState } from 'react';
import './Appi.css';
import spatula from './assets/spatula.jpg';
import StripeContainer from './components/StripeContainer';

function App() {
	const [showItem, setShowItem] = useState(false);
	return (
		<div className='App'>
			<h1>The Edibles</h1>
			{showItem ? (
				<StripeContainer />
			) : (
				<>
					<h3>$10.00</h3>
					<img src={spatula} alt='Food' />
					<button onClick={() => setShowItem(true)}>Purchase Spatula</button>
				</>
			)}
		</div>
	);
}

export default App;