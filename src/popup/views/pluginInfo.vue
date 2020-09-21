<template>
	<div class="viewport" :key="resetKey">
		<div class="panel" v-if="plugin">
			<md-app>
				<md-app-toolbar class="md-primary">
					<router-link :to="'/'" replace>
						<md-button class="md-icon-button">
							<md-icon>arrow_back</md-icon>
						</md-button>
					</router-link>
					<span class="md-title">{{ plugin.name }}</span>
				</md-app-toolbar>
				<md-app-content>
					<md-list md-double-line>
						<md-checkbox v-model="enable">{{plugin.config.enable ? 'オン' : 'オフ'}}(再読み込みすると反映されます)</md-checkbox>

						<md-subheader>詳細</md-subheader>
						<md-list-item>
							<div class="md-list-item-text">
								<span>説明</span>
								<span>{{plugin.description}}</span>
							</div>
						</md-list-item>
						<md-divider></md-divider>
						<md-list-item>
							<div class="md-list-item-text">
								<span>ID</span>
								<span>{{plugin.id}}</span>
							</div>
						</md-list-item>
						<md-divider></md-divider>
						<md-list-item>
							<div class="md-list-item-text">
								<span>作成者</span>
								<span>{{plugin.author || 'Unknown'}}</span>
							</div>
						</md-list-item>
						<md-divider></md-divider>
						<md-list-item>
							<div class="md-list-item-text">
								<span>バージョン</span>
								<span>{{plugin.version}}</span>
							</div>
						</md-list-item>
						<md-divider />
					</md-list>
				</md-app-content>
			</md-app>
		</div>
		<div class="panel" v-else>
			<md-empty-state
				md-icon="devices_other"
				md-label="Cannot find plugin :("
				:md-description="`Cannot find plugin '${$route.params.id}' .pls back to home after select plugin`"
			>
				<router-link :to="'/'" replace>
					<md-button>Go back</md-button>
				</router-link>
			</md-empty-state>
		</div>
	</div>
</template>
<script>

export default {
	name: 'PluginInfo',
	data: function () {
		return {
			plugin: this.$client.findPlugin(this.$route.params.id),
			resetKey: 0
		};
	},
	created: function () {

		setInterval(() => {
			console.log(this.plugin)
			if(this.plugin == null) this.plugin = this.$client.findPlugin(this.$route.params.id);
			this.resetKey++;
		}, 1000);
	},
	computed: {
		enable: {
			get: function () {
				return this.plugin.config.enable;
			},
			set: function (newValue) {
				this.plugin.setEnable(newValue);
			}
		},
		otherConfigs: {
			get: function () {
				return this.plugin.config.otherConfigs;
			},
			set: function (newValue) {
				this.plugin.config.otherConfigs = newValue;
				this.$client.saveConfig;
			}
		}
	}
};
</script>
<style scoped>
.viewport {
	width: 400px;
}
</style>
