import PluginBase from './pluginBase';
import { enableAreas } from '../Constants';

class ChapterTime extends PluginBase {
	constructor(client) {
		super({
			id: 'ChapterTime',
			name: 'Chapter詳細表示',
			description: '単元の詳細を表示します',
			enableArea: enableAreas.CHAPTER,
			client,
			version: '0.1.0'
		});
	}

	onEnable () {
		super.onEnable();
	}
}

export default ChapterTime;