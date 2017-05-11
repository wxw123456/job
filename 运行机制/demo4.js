/**
 * Created by Administrator on 2017/5/11.
 */
//process.nextTick()  总是在当前 执行站的尾部触发

setTimeout(function(){
    console.log(333)
},0);
process.nextTick(function A(){
    console.log(1);
    process.nextTick(function(){
        console.log(2);
    })
});

// 1 2 333