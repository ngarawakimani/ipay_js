//fields object required by Ipay
const fields = {
    "live" : "0",
    "oid" : "112",
    "inv" : "112020102292999",
    "ttl" : "900",
    "tel" : "256712375678",
    "eml" : "kajuej@gmailo.com",
    "vid" : "demo",
    "curr" : "KES",
    "p1" : "airtel",
    "p2" : "020102292999",
    "p3" : "",
    "p4" : "900",
    "cbk" : "http://localhost.com",
    "cst" : "1",
    "crl" : "2"
};

var datastring = "";
var hashkey = "demo";

//prepare the datastring before hashing
for (const key in fields) {
    datastring += fields[key];
}

const generated_hash = CryptoJS.HmacSHA1(datastring, hashkey);

var form_fields;

//create form fields
for (const key in fields) {        
    form_fields += '<label>'+key+'</label><input name="'+key+'" type="text" value="'+fields[key]+'"><br/>';
}

form_fields += '<input name="hsh" type="text" value="'+generated_hash+'" ><br/>';
form_fields += '<button type="submit">&nbsp;Lipa&nbsp;</button>';

document.getElementById("data-form").innerHTML = form_fields;