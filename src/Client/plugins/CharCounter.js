import PluginBase from './pluginBase';
import { enableAreas } from '../Constants';

class CharCounter extends PluginBase {
	constructor (client) {
		super({
			id: 'CharCounter',
			name: '文字数カウンタ',
			description: '文字数カウンターを表示します',
			author: 'tsutoringo',
			enableArea: enableAreas.TEST_AND_REPORT,
			version: '0.1.0',
			client,
			defaultConfig: {
				enable: true
			}
		});
	}

	onEnable () {
		const fields = document.querySelectorAll('.section-item .exercise-item.type-descriptive');
		if (fields.length === 0) return;
		console.log(`[${this.name}]Enabled`);
		const constants = {
			safeColor: '#00c541',
			errorColor: '#f55151'
		};
		for (var i = 0; fields.length > i; i++) {
			const textArea = fields[i].getElementsByClassName('answers')[0];
			const question = fields[i].getElementsByClassName('question')[0];
			const questionText = question.innerHTML;
			const max = (function (text) {
				const template = {
					num: undefined,
					type: 0
				};
				if (/(\d+)字以内/.test(text)) {
					template.num = text.match(/(\d+)字以内/m)[1];
					template.type = 1;
				} else if (/(\d+)\s?字程度/.test(text)) {
					template.num = text.match(/(\d+)\s?字程度/m)[1];
				} else if (/(\d+)文字/.test(text)) {
					template.num = text.match(/(\d+)文字/m)[1];
					template.type = 3;
				} else if (/(\d+)字/.test(text)) {
					template.num = text.match(/(\d+)字/m)[1];
				}
				if (template.num) template.num = Number(template.num);
				return template;
			})(fields[i].getElementsByClassName('question')[0].textContent);
			const countDisplay = document.createElement('div');
			countDisplay.innerText = `${textArea.value.length}${max.num != null ? '/' + max.num : ''}`;

			if (!textArea.disabled) {
				textArea.addEventListener('input', function () {
					question.innerHTML = this.value !== '' ? questionText.replace(/【　\d+　】/g, `<strong>${this.value}</strong>`) : questionText; /* eslint-disable-line no-irregular-whitespace */
					if (max.type === 3) {
						if (max.num === this.value.length) {
							countDisplay.style.color = constants.safeColor;
						} else {
							countDisplay.style.color = constants.errorColor;
						}
					}
					countDisplay.innerText = `${this.value.length}${max.num != null ? '/' + max.num : ''}`;
				});
			}
			if (!fields[i].getElementsByClassName('char-counter')[0]) {
				fields[i].appendChild((function () {
					const charCounter = document.createElement('div');
					charCounter.classList.add('char-counter');
					return charCounter;
				})());
			}
			fields[i]
				.getElementsByClassName('char-counter')[0]
				.appendChild(countDisplay);
		}
	}
}

export default CharCounter;
