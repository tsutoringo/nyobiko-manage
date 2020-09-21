import PluginBase from './pluginBase';
import { enableAreas } from '../Constants';

class VolumeSetter extends PluginBase {
	constructor (client) {
		super({
			id: 'VolumeSetter',
			name: Math.floor(Math.random() * 12) === 1 ? '怨霊調節' : '音量調節',
			description: '鼓膜の予備が要らなくなると思います',
			version: '0.1.0',
			author: 'tsutoringo',
			client,
			enableArea: [
				enableAreas.MOVIE,
				({ hostname }) => /.*tokyo-shoseki\.co\.jp/.test(hostname)
			],
			defaultConfig: {
				enable: false,
				otherConfigs: {
					volume: {
						label: '音量',
						value: 0.1,
						hidden: true
					}
				}
			}
		});
	}

	getVideoELement () {
		return document.getElementById('video01') || document.getElementById('movie');
	}

	onEnable () {
		const video01 = this.getVideoELement();
		if (video01) {
			this.volumeSetter();
			const _self = this;
			video01.addEventListener('volumechange', function () {
				_self.config.otherConfigs.volume.value = this.volume;
				_self._client.saveConfig();
			});
		}
		super.onEnable();
	}

	volumeSetter () {
		const vidoe = this.getVideoELement();
		vidoe.volume = this.config.otherConfigs.volume.value >= 0 ? this.config.otherConfigs.volume.value : 0.1;
	}
}

export default VolumeSetter;
