let html = document.querySelector("#html");
let style=document.querySelector('#style');
let string = `
/*你好,我叫小李
 *接下来我来展示一些小技巧
 *我要准备一个div
 */
#div1{
    border: 1px solid black;
    width: 200px;
    height: 200px;    
}
/*接下来我把div变成一个八卦图
 *注意看好啦
 *首先，把div变成一个圆
 */
#div1{
    border-radius: 50%;    
}
/*八卦是阴阳形成
 *一黑一白
 */
#div1{
background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*八卦图阴中有阳
 *阳中有阴
 */
#div1::before{
    width: 100px;
    height: 100px;
    top:0;
    left:50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius:50%;
    background:radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
#div1::after{
    width: 100px;
    height: 100px;
    bottom:0;
    left:50%;
    transform: translateX(-50%);
    background: #000;
    border-radius:50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}


`
let string2 = ''
let n = 0;


 let step = ()=> {
     
     setTimeout(()=>{
        n=n+1;
        if (string[n]==="\n"){
          string2 += "<br>";
        } else {
            string2 += string[n];
        }

        html.innerHTML = string2;
        style.innerHTML= string.substring(0,n);
        window.scrollTo(0,99999);
        html.scrollTo(0,99999);


        if(n+1<string.length)
        {
            step();
        }            
     },50 ); 
};
step();


