function add(n1,n2)
{
    console.log(arguments);
    return n1+n2+arguments[2];
}
console.log(add(2,3,4,3));