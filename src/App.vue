<template>
	<div class="ui borderless large top  hidden menu">
		<div class="ui  container">
			<img class="logo" src="./assets/logo.png">
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
	<div class="ui borderless small menu">
		<div class="ui container">
			<a class="active item">概览</a>
			<a class="item">功能</a>
			<a class="item">参数</a>
			<div class="right menu">
				<a class="item">
					<button class="ui button small">加入购物车</button>
				</a>
				<a class="item">
					<button class="ui button small buy">立即购买</button>
				</a>
			</div>
		</div>
	</div>
	<div class="ui container">
		<div class="ui grid">
			<div class="two column row">
				<div class="column">
					<div class="left_container">
						<p class="title"><span>湛</span>泸</p>
						<p class="sub_title">匠心独运,大道至简</p>
						<p class="desc">湛泸启动系统适用于GY6-125款发动机,让您感受"其疾如风,其徐如林,不动如山,动若雷霆"的摩托车驾车体验。彰显自我从起步开始</p>
						<p class="price"><span>260</span>元起</p>
					</div>
				</div>
				<div class="column">
					<img class="img1" src="./assets/home/home_product_1.png">
					<img class="img2" src="./assets/home/home_product_2.png">
					<img class="img3" src="./assets/home/home_product_3.png">
				</div>
			</div>
		</div>
	</div>
	<div class="ui inverted vertical footer segment">
		<div class="ui container">
			<div class="ui stackable inverted divided equal height stackable grid">
				<div class="three wide column">
					<h4 class="ui inverted header">About</h4>
					<div class="ui inverted link list">
						<a href="#" class="item">Sitemap</a>
						<a href="#" class="item">Contact Us</a>
						<a href="#" class="item">Religious Ceremonies</a>
						<a href="#" class="item">Gazebo Plans</a>
					</div>
				</div>
				<div class="three wide column">
					<h4 class="ui inverted header">Services</h4>
					<div class="ui inverted link list">
						<a href="#" class="item">Banana Pre-Order</a>
						<a href="#" class="item">DNA FAQ</a>
						<a href="#" class="item">How To Access</a>
						<a href="#" class="item">Favorite X-Men</a>
					</div>
				</div>
				<div class="seven wide column">
					<h4 class="ui inverted header">Footer Header</h4>
					<p>Extra space for a call to action inside the footer that could help re-engage users.</p>
				</div>
			</div>
		</div>
	</div>

</template>

<script>

export default {
  components: {
  }
}
</script>

<style lang="scss">

	$menu_active_color: lighten(black, 10%);
	$menu_hover_color: lighten(black, 60%);
	$menu_color: lighten(black, 80%);

	html {
		font-family: Georgia, "Times New Roman",
		"Microsoft YaHei", "微软雅黑",
		STXihei, "华文细黑",
		serif;
		height: 100%;
	 }
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

	.item{
		button {
			color: white !important;
			background: rgb(0, 162, 213) !important;
			&.buy {
				background: rgb(191,152, 79) !important;

			}
		}
	}
	.row {
		padding: 0 !important;
	}

	.img1{
		margin-left: 10em;
		transform: scale(0.9);
	}

	.img2 {

	}
	.img3{
		transform: scale(1.1);
		margin-left: 10em;
	}


	.two.column.row .column {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.left_container{
		/*background: greenyellow;*/
		padding: 20px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		.title {
			font-size: 5rem;
			font-weight: lighter;
			margin:0 0 30px;
			span {
				position: relative;
			}
			span::before{
				content: '';
				position: absolute;
				bottom:-20px;
				width: 5rem;
				height: 3px;
				background: linear-gradient(right, rgb(0,242,214), rgb(0, 229, 240));
			}
		}
		.sub_title {
			font-size: 4rem;
			color: lighten(black, 40%) !important;
			margin: 0 0 15px 0;
		}
		.desc {
			font-size: 1.5rem;
			color: lighten(black, 50%) !important;
		}
		.price {
			font-size: 2rem;
			span {
				font-size: 3rem;
				color: red !important;
			}
		}
	}


</style>
