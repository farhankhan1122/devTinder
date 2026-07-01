// // remove dublicates 

// function removeDublicates (arr){
//     let result = []

//     for(let i = 0 ; i < arr.length ; i++) {
//         let found = false;

//         for(let j = 0 ; j < result.length; j++){
//             if(arr[i] === result[j]){
//                 found = true 
//                 break;
//             }

//         }
//         if(!found) {
//             result.push(arr[i])
//         }
//     }
//     return result;
// }

// console.log(removeDublicates([1,2,2,3]), "result")


// ----------------------------------------------------------------------------------------------------------------------------------------


// while using setTImeout with var print 1 - 5 (do not use let)

for(var i = 0 ; i < 5; i++){
    (function(i) {
        setTimeout(() => {
        console.log(i)
    },1000)
    })(i)

    
}

/**
 * 
 * Internally the loop does:
    * i = 0
    0 < 5 ✅
    print 0
    i++
    that's why it showing 5 


    var → function scoped        [All callbacks reference same i variable.]
    let → block scoped           [Each iteration creates a new copy of i.]
    IIFE → creates a new scope for each loop iteration
    setTimeout() → callback executes later, after loop finishes

    | Code                   | Output      | Reason                     |
| ---------------------- | ----------- | -------------------------- |
| `var`                  | `5 5 5 5 5` | Single shared variable     |
| `let`                  | `0 1 2 3 4` | New variable per iteration |
| `var + IIFE`           | `0 1 2 3 4` | Function captures value    |
| `var + setTimeout arg` | `0 1 2 3 4` | Value passed directly      |

var remembers the variable → let remembers the value.

 */


// ----------------------------------------------------------------------------------------------------------------------------------------




