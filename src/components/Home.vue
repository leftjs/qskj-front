<template>
	<main>
		<div slot="body">
			<div class="ui borderless small menu" >
				<div class="ui container" >
					<a class="active item">概览</a>
					<a class="item">功能</a>
					<a class="item">参数</a>
					<div class="right menu">
						<div class="item">
							<button class="ui button small" id="add_car">加入购物车</button>
						</div>
						<div class="item">
							<button class="ui button small" id="buy">立即购买</button>
						</div>
					</div>
				</div>
			</div>

			<div class="ui centered grid" id="first">
				<div class="wow fadeInDown row title" >
					湛泸
				</div>
				<div class="wow fadeInUp row sub_title">
					匠心独运,大道至简
				</div>
				<div class="wow fadeIn row" data-wow-duration="2s">
					<div class="img6"></div>
				</div>
			</div>
			<div class="ui container" id="second">
				<div class="ui grid">
					<div class="two column row">
						<div class="column">
							<div class="wow bounceInLeft left_container" data-wow-duration="1s">
								<p class="title"><span>湛</span>泸</p>
								<p class="sub_title">匠心独运,大道至简</p>
								<p class="desc">湛泸启动系统适用于GY6-125款发动机,让您感受"其疾如风,其徐如林,不动如山,动若雷霆"的摩托车驾车体验。彰显自我从起步开始</p>
								<p class="price"><span >260</span>元起</p>
							</div>
						</div>
						<div class="column">
							<img class="wow bounceInDown img1" src="../assets/home/home_product_1.png">
							<img class="wow bounceInRight img2" src="../assets/home/home_product_2.png">
							<img class="wow bounceInUp img3" src="../assets/home/home_product_3.png">
						</div>
					</div>
				</div>
			</div>
		</div>

	</main>
</template>
<style lang="scss" scoped>
	@import "../styles/const.scss";



	.container>.item {
		background: transparent !important;
		color: $menu_color !important;
		&:hover {
			color: $menu_hover_color !important;
		}
		&.active {
			color: $menu_active_color !important;
		}
	}

	button {
		color: white !important;
		&#add_car{
			background: $add_car_color !important;
			&:hover {
				background: lighten($add_car_color, 20%) !important;
			}
		}
		&#buy{
			background: $buy_color !important;
			&:hover {
				background: lighten($buy_color, 20%) !important;
			}
		}
	}


	.img1{
		margin-left: 10em;
		transform: scale(0.9);
	}

	.img2 {

	}
	.img3{
		/*transform: scale(1.1);*/
		/*margin-left: 10em;*/
	}

	#second {
		margin-top: 2em;
		/*border-bottom: 1px solid red;*/
	}

	#first {
		margin-top: 4em;
		.img6 {
			background: url("../assets/home/home_product_6.png") no-repeat center / contain ;
			height: 656px;
			width: 100%;
		}
		.title {
			font-size: 4rem;
			color: lighten(black, 40%) !important;
		}
		.sub_title{
			margin-top: 1em;
			font-size: 2rem;
			color: lighten(gray, 10%) !important;
		}
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
<script>
	import Main from './Main.vue'
	export default {
		name: 'Home',
		components: {
			Main
		},
		ready: () => {
			new WOW().init()
			$(".img6").height($(window).width() * 523 / 1609);
			$(window).resize(function() {
				var width = $(this).width();
				$(".img6").height( 523 / 1609  * width);
			})
		}
	}
</script>
