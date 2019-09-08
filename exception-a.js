/*
 * You can use the following pseudocode:
 *
 * `S` = read string from stdin.
 * try {
 *     `N` = numeric value of `S`.
 *     
 *     If `N` is `NaN` or `undefined`, then some exception must be thrown,
 *     you can write the following withtout using conditional statement:
 *     <condition to return true when `N` is `NaN` or `undefined`> && an_undefined_function_call()
 *
 *     print `N`
 * } catch (err) {
 *     print `Bad String`.
 * }
 */

function main() {
    const S = readLine();
    try {

        // let n = eval(S);
        S != Number(S) && err()
        console.log(Number(S))
    }
    catch (err) {
        console.log('Bad String')
    }
}





// https://drive.google.com/open?id=1zBdbyCkSXAP6_Del5bY_pslVyEf4rmja
// https://drive.google.com/open?id=1bAWDrC4rBGI-YoPHK_o1ljh1vtK7FMHk