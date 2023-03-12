let maagic:string[]=["talha","nadir","muh","ali"];
let maagic2:string[];
function show_maagic(arr:string[],ar2:string[]):void
{
    for(let i=0;i<arr.length;i++)
    {
    console.log(`${arr[i]} the great`);
    }
    console.log("copied array : "+ar2);
}
function make_great(arr2:string[])
{
    let copy:string[]=arr2;
    return copy;
}
maagic2=make_great(maagic);
show_maagic(maagic,maagic2);