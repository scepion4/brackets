module.exports = function check(str, bracketsConfig) {
   let stack=[]
   let brackets={}
   let check=[]
   bracketsConfig.forEach(e=>{
     brackets[e[1]]=e[0]
     check.push(e[1])
   })
   for(let i=0;i<str.length;i++){
    
     if(str[i]==brackets[str[i]]&&check.includes(str[i])&&stack.includes(str[i])||str[i]!==brackets[str[i]]&&check.includes(str[i])){
    if(brackets[str[i]]!==stack.pop()) return false 
   }else{
   stack.push(str[i])
   }
   }
   return stack.length==0
}


