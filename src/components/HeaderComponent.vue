<template>
	<div class="ui borderless large top  hidden menu">
		<div class="ui  container">
			<img class="logo" src="../assets/logo.png">
			<a class="active item">启动系统</a>
			<a class="item">官方论坛</a>
			<a class="item">黑科技NEWS</a>
			<div class="right menu ">
				<a class="item my-icon">
					<i class="search large icon"></i>
				</a>
				<a class="item my-icon">
					<i class="shop large icon"></i>
				</a>
			</div>
		</div>
	</div>
</template>
<style lang="scss" scoped>

	@import "../styles/const.scss";

	.menu.top {
		background: linear-gradient(top, white, lighten(gray,45%));
		height: 80px;
		.ui.container{
			display: flex;
			align-items: center;
			}
			border-radius: 0;
			margin-bottom: 0;
			border-bottom: none;
		}
	.menu.small {
		background: linear-gradient(top, white, lighten(gray,45%));
		margin-top: 0;
		box-shadow: none;
		border-radius: 0;
	}
	.logo {
		width: 50px;
		height: 50px;
		margin-right: 50px;
	}


	.item:not(.my-icon) {
		background: transparent !important;
		color: $menu_color !important;
		&:hover {
			 color: $menu_hover_color !important;
		 }
		&.active {
			 color: $menu_active_color !important;
		 }
	}
</style>
<script>
	export default {
	}
</script>
