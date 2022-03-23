//闭包练习 输出结果
function foo(a,b){
    console.log(b);
    return {
        foo:function(c){
            return foo(c,a);
        }
    };
}
//foo函数返回一个对象。该对象有一个方法foo，该方法又调用函数foo

//分析过程：
//1.x为foo(0)返回对象,a=0 b=undefined;
//2.x.foo(1)=>foo(c=1 a=0)=>a=1,b=0;
//3.x.foo(2)=>foo(c=2,a=0)=>a=2,b=0;
//4.x.foo(3)=>foo(c=3,a=0)=>a=3,b=0;
var x = foo(0);x.foo(1);x.foo(2);x.foo(3);

//分析过程：
//1.y为foo(0)返回对象,a=0 b=undefined;
//2.foo(1)=>foo(c=1 a=0)=>a=1,b=0;
//3.foo(2)=>foo(c=2,a=1)=>a=2,b=1;
//4.foo(3)=>foo(c=3,a=2)=>a=3,b=2;
var y = foo(0).foo(1).foo(2).foo(3);

//分析过程：
//1.y为foo(0)返回对象,a=0 b=undefined;
//2.foo(1)=>foo(c=1 a=0)=>a=1,b=0;
//3.foo(2)=>foo(c=2,a=1)=>a=2,b=1;
//4.foo(3)=>foo(c=3,a=1)=>a=3,b=1;
var z = foo(0).foo(1);z.foo(2);z.foo(3);
