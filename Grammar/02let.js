{
    var v=1
    {
        var v=2
        console.log(v) //2
    }
    console.log(v) //2(주의)
}

{
    let l=1
    {
        let l=2
        console.log(l)  //2
    }
    console.log(l) //1
}