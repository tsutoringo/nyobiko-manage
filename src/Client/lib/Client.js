import pluginBase from '../plugins/pluginBase';

/**
 *
 */
class Client {
	constructor (plugins, runScripts = false) {
		this.plugins = [];
		chrome.storage.local.get(undefined, config => {
			this.config = Object.assign({
				plugins: {}
			}, config);
			for (const plugin of plugins) {
				this.loadPlugin(plugin);
			}
			if (runScripts) {
				this.runScripts();
			}
		});
	}

	loadPlugin (Plugin) {
		const plugin = new Plugin(this);
		if (!(plugin instanceof pluginBase)) {
			throw new Error(`plugin:${plugin.constructor.name} is not extends pluginBase`);
		}
		if (plugin.id == null) {
			throw new Error(`plugin:${plugin.constructor.name} is missing id`);
		}
		plugin.onLoad();
		this.plugins.push(plugin);
	}

	findPlugin (id) {
		return this.plugins.find(plugin => plugin.id === id);
	}

	setPluginConfig (plugin, config) {
		this.config.plugins[plugin.id] = config;
	}

	enablePlugin (plugin) {
		this.config.plugins[plugin.id].enable = true;
		this.saveConfig();
	}

	disablePlugin (plugin) {
		this.config.plugins[plugin.id].enable = false;
		this.saveConfig();
	}

	saveConfig () {
		chrome.storage.local.set(this.config, () => {});
	}

	runScripts () {
		console.log('start enable plugins');
		for (const plugin of this.plugins) {
			if (plugin.enableArea.test(location.pathname) && plugin.config.enable) {
				plugin.onEnable();
			}
		}
	}
}

export default Client;
