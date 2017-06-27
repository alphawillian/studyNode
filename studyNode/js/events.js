// 引入 events 模块
var events = require('events');
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();

// 创建事件处理程序
var connectHandler = function connected() {
   console.log('连接成功。');
  
   // 触发 data_received 事件 
   eventEmitter.emit('data_received11');
   eventEmitter.emit("william");
}

// 绑定 connection 事件处理程序
eventEmitter.on('connection', connectHandler);
 
// 使用匿名函数绑定 data_received 事件
eventEmitter.on('data_received11', function(){
   console.log('数据接收成功。');
});
//绑定 William 事件
eventEmitter.on('william',function(){
	console.log('自定义William事件触发成功');
})
console.log("程序执行完毕1。"); 
// 触发 connection 事件 
eventEmitter.emit('connection');

console.log("程序执行完毕。"); 