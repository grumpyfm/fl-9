function getClosestToZero(x,y,z,n){
    let array=[x,y,z,n];
    let closest=array[0];
    for (let i=0;i<array.length;i++){
       if (Math.abs(array[i])<closest ){
           closest=array[i];
       }
    }
    return closest;
}