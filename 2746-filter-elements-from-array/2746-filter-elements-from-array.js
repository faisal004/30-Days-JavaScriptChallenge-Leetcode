/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = (arr, fn)=> {
    var filterArr=[];
    for(var i=0;i<arr.length;i++){
        if(fn(arr[i],i)){
         filterArr.push(arr[i]);
        }
        
    }
    return filterArr;

    
};