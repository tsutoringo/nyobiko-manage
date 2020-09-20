import PluginBase from './pluginBase';

class VolumeSetter extends PluginBase {
	constructor(client) {
		super({
			id: 'VolumeSetter',
			name: Math.floor(Math.random() * 15) === 1 ? '怨霊調節' : '音量調節',
			description: '',
			enableArea:''
		});
	}
}

export default VolumeSetter;