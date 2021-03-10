function helper()
{
    console.log(`List of all commands:
                1. node wcat.js read <dirname> 
                2. node wcat.js readall <dirname1> <dirname2> <dirname3>
                3. node wcat.js -s filepath <dirname1> 
                4. node wcat.js -n filepath <dirname1> 
                5. node wcat.js -s filepath <dirname1> `);
}

module.exports = 
{
    helpFn : helper
}