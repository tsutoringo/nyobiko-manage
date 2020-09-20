
class PluginBase {
	/**
	 * @constructor
	 * @param {Object} param0 Plugin info
	 * @param {String} param0.id plugin id
	 * @param {String} param0.name plugin name
	 * @param {String} [param0.description] plugin description
	 * @param {Array} [param0.enableArea=[]] plugin enable area
	 * @param {String} [param0.version] plugin version
	 */
	constructor ({ id, name, description, author, enableArea, version, client, defaultConfig }) {
		this.id = id;
		this.name = name;
		this.description = description;
		this.author = author;
		this.enableArea = enableArea;
		this.version = version;
		this._client = client;
		if(this._client.config.plugins[this.id] == null) {
			this._client.setPluginConfig(this, defaultConfig);
		}
		this.config = this._client.config.plugins[this.id];
	}

	toggleEnable() {
		!this.config.enabled ? this._client.enablePlugin(this) : this._client.disablePlugin(this);
	}

	setEnable(bool) {
		bool ? this._client.enablePlugin(this) : this._client.disablePlugin(this);
	}
	/*
	================================================================
	*                           Events                             *
	================================================================
	*/

	onLoad () {
		console.log(`[${this.name}]Loaded`);
	}

	onEnable () {
		console.log(`[${this.name}]Enabled`);
	}

	onDisable () {
		console.log(`[${this.name}]Disabled`);
	}
}

export default PluginBase;
