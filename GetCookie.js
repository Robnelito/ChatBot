// cette parti du script jou un role  crucial car elle recupere les donnees de l'utilisateur connecter


// Prendre l'ID de l'utilisateur
const UserUnique_id = document.cookie
    .split('; ')
    .find(row => row.startsWith('unique_id='))
    .split('=')[1];


// Prendre l'email de l'utilisateur
const UserEmail = document.cookie
    .split('; ')
    .find(row => row.startsWith('email='))
    .split('=')[1];

// Prendre le nom de l'utilisateur
const UserName = document.cookie
    .split('; ')
    .find(row => row.startsWith('name='))
    .split('=')[1];


//Prendre le numero de telephone de l'utilisateur
const UserPhone = document.cookie
    .split('; ')
    .find(row => row.startsWith('phone='))
    .split('=')[1];



//Identification de l'utilisateur dans la base de donnee de tidio.
document.tidioIdentify = {
    distinct_id: UserUnique_id, // Unique visitor ID in your system
    email: UserEmail, // visitor email
    name: UserName, // Visitor name
    phone: UserPhone //Visitor phone
};
