/**
 * Fonction qui va mettre dans un cookies le valeur de chaque input
 * @param {?string} unique_id
 * @param {?string} email  email format required
 * @param {?string} name
 * @param {?string} phone format eg: +261 ...
 */
function tidioUser(){

    // Recuper les valeurs dans les input des formulaires 
    var unique_id = document.getElementById("distinct_id").value
    var email =  document.getElementById("email").value
    var name = document.getElementById("name").value
    var phone = document.getElementById("phone").value

    document.cookie = "unique_id=" + unique_id
    document.cookie = "email=" + email
    document.cookie = "name=" + name
    document.cookie = "phone=" + phone


    console.log(document.cookie)
}

