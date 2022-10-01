



/**
 * The function is used to validate the user's input, and if the user's input is not valid, the
 * function will return a message to the user.
 * @param req - The request object.
 * @param res - The response object.
 * @param next - It is a function that is used to pass control to the next middleware function.
 * @returns The error message is being returned.
 */
export const regExpFunction = async (req, res, next)=>{
    const {user, email, password} = req.body;

    const regExpUser = await /^<|$>/.test(user)
    

    if(regExpUser) return res.json({"message": 'Los caracterés introducidos son erróneos'})

    const regExpEmail = await /^<|$>/.test(email)

  
    if(regExpEmail) return res.json({"message": 'Los caracterés introducidos son erróneos'})

    const regExpPassword = await /^<|$>/.test(password)

    
    if(regExpPassword) return res.json({"message": 'Los caracterés introducidos son erróneos'})

    next()

}