import Client from './lib/Client';
import plugins from './plugins';
import PluginBase from './plugins/pluginBase';

/**
 * @param {Boolean} runScripts スクリプトを実行するか否か
 */
function Nyobi ( runScripts ) {
	return new Client(plugins, runScripts);
}

Nyobi.PluginBase = PluginBase;

export default Nyobi;
