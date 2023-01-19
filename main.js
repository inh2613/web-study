console.log('값을 확인!')

/*변수선언방식*/
let a=100;
console.log(a)

/*const는 변수 재할당 안됨*/
const b=200;

console.log(a+b)

let c="문자";
console.log(a+c)

let arr=[1,2,3,4,5]
arr.push(6)
console.log(arr)

let dic={
    "key":"value"
}
console.log(dic)
dic.key2='value2'; /*==dic['key2']='value2'*/
console.log(dic)

let arr1=[1,2,3,4,5,true,'문자',{'key':'value'}]

// if(10>5){

// }
// else if(2>4){

// }
// else{

// }

for(let i=0;i<10;i++){
    console.log(i)
}

function x(num){
    //return num;
    alert(num)
}
let y=x(10)
console.log(y)

let str="웹개발자-사관학교";
let str_arr=str.split('-')
console.log(str_arr)

let str_str=str_arr.join("*");
console.log(str_str)