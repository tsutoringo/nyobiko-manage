<template>
	<div class="viewport">
		<md-toolbar :md-elevation="1">
			<span class="md-title">もっと勉強しよう</span>
		</md-toolbar>
		<md-list class="md-double-line">
			<md-subheader>Plugins</md-subheader>
			<md-list-item
				v-for="(plugin, key) in $client.plugins"
				:key="key"
			>
				<md-icon class="md-primary">build</md-icon>
				<div class="md-list-item-text">
					<span>{{ plugin.name }}</span>
					<span>v{{ plugin.version }}</span>
				</div>
				<md-button class="md-icon-button md-list-action">
					<md-icon>arrow_forward</md-icon>
				</md-button>
			</md-list-item>
			<md-divider/>
		</md-list>
	</div>
</template>
<script>

export default {
	name: 'Index',
	mounted: function () {
		console.log(this.$client);
	}
};
</script>
<style scoped>
.viewport {
	width: 100%;
}
</style>
