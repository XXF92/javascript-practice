//下面代码会访问到本地文件，请自行建立 data1.json data2.json  data3.json文件，访问本地文件请用谷歌浏览器，并把快捷方式后缀加上 --allow-file-access-from-files 才可以正常访问
 //使用到 jquery.js 需要自行创建。
//异步操作Promise对象练习
console.log("star...");

function queryPromise(url,data={},type="get",dataType="json"){

	return new Promise((resolve,reject)=>{
		$.ajax({
			url:url,
			type:type,
			data:data,
			dataType:dataType,
			success:function(res){
				resolve(res);

			},
			error:function(reason){
				reject(reason);
			}

		});
	})
}
// data1.json =>{"id":1}
// data2.json =>{"username":"xxf"}
// data3.json =>{"age":18}

const p = queryPromise("./js/data1.json");

p.then((val)=>{
	const {id} = val;//解构对象
	console.log(id);
	// throw new Error("发生错误");
	return queryPromise("./js/data2.json",{id});//手动返回一个新Promise对象，并且改变了该对象的状态

}).then((val)=>{
	const {username} = val;
	console.log(username);
	return queryPromise("./js/data3.json",{username});

}).then((val)=>{
	const {age} = val;
	console.log(age);
	return {"gender":"male"};//直接返回值,也会改变该then函数返回的新Promise对象的状态
}).then((val)=>{
	const {gender} = val;
	console.log(gender);
	
}).catch((reason)=>{
	//运行时发生错误或抛出异常时执行
	console.log(reason);
	
});


// console.log(p);//查看p的状态

console.log("end...");
