function more (num1, num2){
    const arr1 = num1.toString().split('');
    const arr2 = num2.toString().split('');
    if(arr1.length>arr2.length){
        console.log(num1)
    }else if(arr1.length<arr2.length){
        console.log(num2)
    }else{
        console.log('equal')
    }
}
more(1,11)