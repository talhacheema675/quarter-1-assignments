let num_arr:Number[]=[1,2,3,4,5,6,7,8,9];
for(let i=0;i<num_arr.length;i++)
{
 if(num_arr[i]==1)
 {
    console.log(`${num_arr[i]}st`);
 }
 else if(num_arr[i]==2)
 {
    console.log(`${num_arr[i]}nd`);
 }  
 else if(num_arr[i]==3)
 {
    console.log(`${num_arr[i]}rd`);
 } 
 else
 {
    console.log(`${num_arr[i]}th`);
 }
}