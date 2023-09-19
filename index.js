// code your solution here
function saturdayFun(action="roller-skate"){
return(`This Saturday, I want to ${action}!`)
}


const mondayWork = function (sentence="go to the office") {
    return(`This Monday, I will ${sentence}.`)
}


function wrapAdjective(parameter1="*"){
    return function( parameter="special"){
        return (`You are ${parameter1}${parameter}${parameter1}!`) 
}

}