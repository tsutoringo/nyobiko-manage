import PluginBase from './pluginBase';
import { enableAreas } from '../Constants';

class ToggleVideo extends PluginBase {
	constructor (client) {
		super({
			id: 'ToggleVideo',
			name: '動画切り替え',
			description: '動画を表示するか否かを設定します',
			author: 'tsutoringo',
			enableArea: enableAreas.CHAPTER,
			version: '0.1.0',
			client,
			defaultConfig: {
				enable: false
			}
		});
	}

	onEnable () {
		super.onEnable();
		this.toggle();
	}

	toggle() {
		const ele = document.querySelectorAll('.u-list.has-linked-children li.movie');
		for (var i = 0; i < ele.length; i++) ele[i].style.display = ele[i].style.display === 'none' ? 'block' : 'none';
	}
}

export default ToggleVideo;
