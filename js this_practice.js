var person1={
    name:"person1",
    //普通函数
    show1:function(){
        console.log(this.name);
    },
    //箭头函数
    show2:()=>{console.log(this.name)},
    //返回匿名函数
    show3:function(){
        return function(){
            console.log(this.name);
        }
    },
    //返回箭头函数
    show4:function(){
        return ()=>{console.log(this.name);}

    }
}

var person2={name:"person2"};
var name = "window";

//普通函数调用 运行时谁调用this指向谁，而且用call可以改变this指向
person1.show1();
person1.show1.call(person2);

//箭头函数没有this属性所以继承父级左右域的this，所以在声明的时候就确定了，所以无法改变指向(因为是别人的东西不是自己的无法确定也无法改变)
//show是在person1声明的时候确定的，所以继承person1的父级作用域的this->window
person1.show2();
person1.show2.call(person2);

//当一个函数的返回值为匿名函数 func()()可以等价于var f = func();window.f();
person1.show3()();
person1.show3().call(person2);
person1.show3.call(person2)();

//当一个函数的返回值为箭头函数
//箭头函数this在声明是确定，这里this是在show4方法运行在返回时声明的，所以此时show4方法运行时的父级左右域为person1，this->personper1
person1.show4()();
//箭头函数的this指向无法改变
person1.show4().call(person2);
//同理,这里是在call函数指向的person2调用show4方法返回时声明的箭头函数，所以指向show4方法运行时的父级作用域为person2，this->person2
person1.show4.call(person2)();
