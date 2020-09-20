<template>
	<div class="viewport">
		<md-toolbar :md-elevation="1">
			<span class="md-title">もっと勉強しよう</span>
		</md-toolbar>
		<md-list class="md-double-line" :key="resetKey">
			<md-subheader>Plugins</md-subheader>
			<md-divider></md-divider>
			<md-list-item
				v-for="(plugin, key) in $client.plugins"
				:key="key"
			>
				<md-icon class="md-primary">build</md-icon>
				<div class="md-list-item-text">
					<span>{{ plugin.name }}</span>
					<span>v{{ plugin.version }}</span>
				</div>
				<router-link :to="`/plugin/${plugin.id}`">
					<md-button class="md-icon-button md-list-action">
						<md-icon>arrow_forward</md-icon>
					</md-button>
				</router-link>
			</md-list-item>
			<md-divider></md-divider>
		</md-list>
		<md-list class="md-double-line">
			<md-subheader>About</md-subheader>
			<md-divider></md-divider>
			<md-list-item>
				<md-icon>face</md-icon>
				<div class="md-list-item-text">
					<span>作成者</span>
					<span>tsutoringo</span>
				</div>
			</md-list-item>
			<md-divider></md-divider>
		</md-list>
	</div>
</template>
<script>

export default {
	name: 'Index',
	data: function () {
		return {
			resetKey: 0
		}
	},
	created: function () {
		setTimeout(() => {
			console.log('test')
			this.resetKey++;
		}, 100);
		setInterval(() => {
			this.resetKey++;
		}, 500);
	}
};
</script>
<style scoped>
.viewport {
	width: 400px;
}
</style>
