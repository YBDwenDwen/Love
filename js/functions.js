// 获取窗口对象
var $win = $(window);
// 获取当前窗口的宽度
var clientWidth = $win.width();
// 获取当前窗口的高度
var clientHeight = $win.height();

// // 监听窗口大小改变事件
// $(window).resize(function () {
// 	// 获取新的窗口宽度和高度
// 	var newWidth = $win.width();
// 	var newHeight = $win.height();
// 	// 如果宽度或高度发生变化，则刷新页面
// 	if (newWidth != clientWidth && newHeight != clientHeight) {
// 		location.replace(location);
// 	}
// });

// 自执行函数，扩展jQuery的功能
(function ($) {
	// 定义一个名为typewriter的新jQuery函数
	$.fn.typewriter = function () {
		// 遍历所有被选中的元素
		this.each(function () {
			var $ele = $(this), // 当前元素
				str = $ele.html(), // 获取元素的HTML内容
				progress = 0; // 初始化进度
			$ele.html(''); // 清空元素内容

			// 创建一个定时器，用于逐字输出字符
			var timer = setInterval(function () {
				var current = str.substr(progress, 1); // 取出当前字符
				// 如果当前字符是 '<'，找到相应的 '>'
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++; // 否则，移动到下一个字符
				}
				// 更新元素内容，展示当前进度（偶数进度加下划线）
				$ele.html(str.substring(0, progress) + (progress & 1 ? '' : ''));
				// 如果达到字符串的末尾，停止定时器
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 70); // 每75毫秒更新一次
		});
		return this; // 返回jQuery对象，方便链式调用
	};
})(jQuery); // 传入jQuery作为参数，确保$为jQuery的别名

// 定义一个函数，计算时间差
function timeElapse(date) {
	// 获取当前日期和时间
	var current = Date();
	// 计算当前时间与给定时间的差值（秒）
	var seconds = (Date.parse(current) - Date.parse(date)) / 1000;
	// 计算经过的天数
	var days = Math.floor(seconds / (3600 * 24));
	seconds = seconds % (3600 * 24); // 剩余秒数
	// 计算经过的小时
	var hours = Math.floor(seconds / 3600);
	if (hours < 10) {
		hours = "0" + hours; // 小于10的小时前补零
	}
	seconds = seconds % 3600; // 剩余秒数
	// 计算经过的分钟
	var minutes = Math.floor(seconds / 60);
	if (minutes < 10) {
		minutes = "0" + minutes; // 小于10的分钟前补零
	}
	seconds = seconds % 60; // 剩余秒数
	if (seconds < 10) {
		seconds = "0" + seconds; // 小于10的秒前补零
	}
	// 格式化结果，并更新到页面的#clock元素中
	var result = "第 <span class=\"digit\">" + days + "</span> 天 <span class=\"digit\">" + hours + "</span> 小时 <span class=\"digit\">" + minutes + "</span> 分钟 <span class=\"digit\">" + seconds + "</span> 秒";
	$("#clock").html(result);
}
