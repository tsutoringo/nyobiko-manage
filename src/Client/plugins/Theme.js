import PluginBase from './pluginBase';
import { enableAreas } from '../Constants';

class Theme extends PluginBase {
	constructor(client) {
		super({
			client,
			id: 'Theme Changer',
			name: 'テーマ',
			description: '配色変更します',
			enableArea: enableAreas.CHAPTER,
			version: '0.1.0',
			defaultConfig: {
				enable: true,
				otherConfigs: {
					css: {
						label: 'css',
						value: `
						@import(https://tsutoringo.github.io/nyobiko-manage/src/Client/plugins/theme/defaultTheme.css);
						:root {
							
						}
						`
					}
				}
			}
		})
	}
	onEnable() {
		const homeStyle = document.createElement('style');

		homeStyle.innerText = this.config.otherConfigs.css
		document.head.appendChild(homeStyle);
		super.onEnable();
	}
}

export default Theme;