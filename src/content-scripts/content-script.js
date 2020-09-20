import Client from '../Client';

window.addEventListener('load', () => {
	const client = new Client(true);
	client.findPlugin('test');
}, { once: true });
