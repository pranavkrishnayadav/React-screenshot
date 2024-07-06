function fun_one(){
  return 'Welcome to my Function'
}


function auth(arg1,arg2){

    if(arg1==='admin' && arg2==='admin')
        return true;
    else
     return false;
}

export default fun_one;

export {auth};


