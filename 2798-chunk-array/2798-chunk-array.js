/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function(arr, size) {
   var chunks=[];
   for(var i=0;i<arr.length;i+=size){
       chunks.push(arr.slice(i,size+i))
   }
   return chunks
};