/* ----------------------
   Account Details
---------------------- */
const accountId = 1445553;
let accountEmail = "abc@gmail.com";
var accountPassword = "Dsefsabefb";

/*
accountCity is declared without var, let, or const.
It becomes a global variable (not recommended).
*/
accountCity = "Michigan";

/* ----------------------
   Updating Account Details
---------------------- */
/*
accountId is a const, so it cannot be reassigned.
The following line would throw an error if uncommented:
*/
// accountId = "q23q233e";

accountEmail = "new@gmail.com";    /* Using let, can be reassigned */
accountPassword = "w345w45";       /* Using var, can be reassigned */
accountCity = "new";                /* Global variable, reassigned */

/* ----------------------
   Display Account Details
---------------------- */
console.table([accountEmail, accountPassword, accountCity]);
