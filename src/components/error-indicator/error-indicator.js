import React from 'react';

import boom from './boom.png'
import './error-indicator.css';

const ErrorIndicator = () => {
	return (
		<div id='error_planet'>
			<img className='planet_boom' src={boom} alt='error-boom' />	
			<p id='boom'>Boom!</p>
			<p>something has gone terribly wrong</p> 
			<p>(but we already sent droids to fix it)</p>
		</div>
	)
}

export default ErrorIndicator;