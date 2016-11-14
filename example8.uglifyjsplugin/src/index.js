alert(1);
function test(){
    console.log(11);
}
//这是什么
test.prototype = {
    constructor:test,
    '1':function(){

    },
    '2':function(){

    }
}
