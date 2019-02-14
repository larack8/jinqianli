var WxParse = require('../../wxParse/wxParse.js');
Page({
  data: {},
  onLoad: function() {
    var that = this;
    /**
     * 初始化emoji设置
     */
    WxParse.emojisInit('[]', "/wxParse/emojis/", {
      "00": "00.gif",
      "01": "01.gif",
      "02": "02.gif",
      "03": "03.gif",
      "04": "04.gif",
      "05": "05.gif",
      "06": "06.gif",
      "07": "07.gif",
      "08": "08.gif",
      "09": "09.gif",
      "09": "09.gif",
      "10": "10.gif",
      "11": "11.gif",
      "12": "12.gif",
      "13": "13.gif",
      "14": "14.gif",
      "15": "15.gif",
      "16": "16.gif",
      "17": "17.gif",
      "18": "18.gif",
      "19": "19.gif",
      "20": "20.gif",
      "21": "21.gif",
      "22": "79.gif",
    });
    /**
     * html解析示例
     */
    var article = `< !DOCTYPE HTML ><!--注释: wxParse试验文本-->

	<div style="margin-top:8px;">
		<img src="../../image/title_bg.png" alt="">
	</div>

  <div style="margin-top:10px;">
		<h3 style="color: #000;">来自一位喜欢你的小哥哥</h3>
		<blockquote>狐狸已化妖</blockquote>
	</div>

 	<div style="margin-top:10px;">
		<h3 style="color: #000;">恭喜你收到一封爱的信函，❤</h3>
		<blockquote>花自飘零水自流。一种相思，两处闲愁。此情无计可消除，才下眉头，却上心头。情人节快乐 ^.^ [00][02][03][04][06] </blockquote>
	</div>

	<div style="margin-top:10px;">
		<h3 style="color: #000;">下面的MV，送给最爱的小月</h3>
		<div style="margin-top:10px;">
			<video src="https://resources.laihua.com/2019-2-13/a9b8fb9c-3885-47ce-bc24-b228c7709184.mp4?attname=214%E6%83%85%E4%BA%BA%E8%8A%82%E4%B9%8B%E5%B0%8F%E6%9C%88%E6%88%91%E5%96%9C%E6%AC%A2%E4%BD%A0.mp4"></video>
		</div>
	</div>

  <div style="margin-top:10px;">
		<h3 style="color: #000;">最美的情话，送给最爱的你</h3>
	</div>

    <div style="margin-top:10px;">
		  <blockquote>	海上生明月，天涯共此时，情人怨遥夜，竟夕起相思。 </blockquote>
    </div>
    <div style="margin-top:10px;">
			<img src="../../image/xiaoyue.jpg" alt="">
		</div>
    <div style="margin-top:10px;">
		  <blockquote>	还记得2018年最后的一天晚上吧，我们一起找住的地方，差点露宿街头了。</blockquote>
    </div>
    <div style="margin-top:10px;">
      <blockquote>	还记得2019年的第一天凌晨吗，说好一起跨年，却在车上奔波度过。 </blockquote>
    </div>
    <div style="margin-top:10px;">
      <blockquote>	周末时，不远50km开车去凤岗，只为见你一面，一起吃个饭。然后0点再开车回宝安。来回折腾7个多小时，也特别开心。月光的感触如你让人心驰又怯与接近。[21][21] </blockquote>
    </div>
    <div style="margin-top:10px;">
			<img src="../../image/xiaoyue2.jpg" alt="">
		</div>
    <div style="margin-top:10px;">
	    <blockquote>	初见倾心，再见痴心。煞费苦心，欲得芳心。想得催心，等得焦心。难道你心，不懂我心，愿以真心，融化你心。 </blockquote>
    </div>
    <div style="margin-top:10px;">
			<img src="../../image/xiaoyue3.jpg" alt="">
		</div>
    <div style="margin-top:10px;">
	    <blockquote>	这里荒芜寸草不生，后来你来这走了一遭，奇迹般万物生长，这里是我的心。我不知道，下一辈子是否还能遇见你，所以我今生才会，那么努力，把最好的给你。与你相遇是我这辈子最幸运的事，认识你是我这辈子最美好的事，与你相恋是我这辈子最快乐的事。小月，我喜欢你。[03][03] </blockquote>
    </div>
    <div style="margin-top:10px;">
      <blockquote>	愿未来所有的好时光都有你相伴，愿情话终有主，你我不再孤独。[12][12] </blockquote>
    </div>

  <div style="margin-top:10px;">
		<div style="margin-top:10px;">
			<img src="../../image/logo_bg.jpg" alt="">
		</div>
	</div>
    
    <div style="margin-top:10px;">
			<ul>
				<li style="color: red;"> 小月，做我女朋友吧 </li>
			</ul>
		</div>

		<div align="center">
			<img src="../../image/jinqianli_miniapp_logo.jpg" style="width:200px;height:200px;display:inline-block;margin:0 auto" alt="">
		</div>

		</div>
	</div>
	<!--ap-->
    `;

    WxParse.wxParse('article', 'html', article, that, 5);

    /**
     * 多数据解析示例
     */
    var replyHtml0 = `<div style="margin-top:10px;height:50px;">
		<p class="reply">
		~~~~~~~~~情人节快乐~~~~~~~~~
		</p>	
	</div>`;

    var replyHtml1 = `<div style="margin-top:10px;height:50px;">
		<p class="reply">
		文章不错，创意也挺好。[22]
		</p>	
	</div>`;

    var replyHtml2 = `<div style="margin-top:10px;height:50px;">
		<p class="reply">
	楼主情真意切，感人至深，女主如果还没被感动实在说不过去了。[16][16]
		</p>	
	</div>`;

    var replyHtml3 = `<div style="margin-top:10px;height:50px;">
		<p class="reply">
	求男主微信
		</p>	
	</div>`;

    var replyArr = [];
    replyArr.push(replyHtml0);
    replyArr.push(replyHtml1);
    replyArr.push(replyHtml2);
    replyArr.push(replyHtml3);

    for (let i = 0; i < replyArr.length; i++) {
      WxParse.wxParse('reply' + i, 'html', replyArr[i], that);
      if (i === replyArr.length - 1) {
        WxParse.wxParseTemArray("replyTemArray", 'reply', replyArr.length, that)
      }
    }
  }


})