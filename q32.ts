let nw_user:string[]=["talha","adil","admin","ali","rasheed"];
let old_user:string[]=["cheema","safdar","afzal","ali","noman"];
let count:number=0;
for(let i=0;i<nw_user.length;i++)
{
    let count:number=0;
    for(let j=0;j<old_user.length;j++)
    {
        if(nw_user[i]==old_user[j])
        {
            console.log(`username ${nw_user[i]} already exist enter new one`);
            count++;
        }
        
    }
    if(count==0)
    {
        console.log(`${nw_user[i]} is available`);
    }
}

