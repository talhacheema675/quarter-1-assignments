var guest=["ali","hamza","tanveer","adil"];
for(var i=0;i<guest.length;i++)
{
console.log(guest[i]+", i would like to invite you on my party ");
}
console.log("New guest list as hamza not coming and talha coming at its place");
guest.splice(1,0,"talha");
console.log(guest);
for(var i=0;i<guest.length;i++)
{
console.log(guest[i]+", i would like to invite you on my party ");
}