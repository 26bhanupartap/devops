let result = function(marks)
{

    if(marks>80)
    {
        console.log(`score ${marks}`)
        console.log('grade is A')
    }
    else if (marks >=50 || marks==80 )
    {
        console.log(`marks ${marks}`)
        console.log('grade is B')
    }
    else
    {
        console.log('fail')
    }
}
    result(81);