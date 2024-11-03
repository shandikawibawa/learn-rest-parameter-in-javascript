// Sintaks parameter sisanya memungkinkan suatu fungsi menerima argumen dalam jumlah tidak terbatas
// sebagai array, menyediakan cara untuk merepresentasikan fungsi variadik dalam JavaScript

function user(x, ...userData) {
    console.log(x);
    console.log(userData);
}

user("Shandika", 18, "programming", "football"); 

function person(firstName, lastName, ...hobbies) {
    console.log('First Name: ', firstName)
    console.log('last Name: ', lastName)
    console.log('Hobbies: ', hobbies)
}

person("shandika", "WebDev", "programming", "football", "singing");

function variadic(...params) {
    console.log(params);
}

console.log("Shandika", "WebDev", 19, 20, ["one"])