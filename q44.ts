let countt=0;
function sandwich(...item:string[]):void
{
    countt++;
    console.log(`customer # ${countt} wanted: ${item} on his sandwich`);
}
sandwich("cheesa","beef");
sandwich("kepchup","chicken","fries");
sandwich("olive ","onion","jalepeno","sause");