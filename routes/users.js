var express = require("express");
var router = express.Router();

let products = [];
products.push({ name: "xl6", category: "Car", description: "Family car", image: "images/xl6.jpg" });
products.push({ name: "Swift", category: "Car", description: "Family car", image: "images/swift.jpg" });
products.push({ name: "Baleno", category: "Car", description: "Family car", image: "images/baleno.jpg" });
products.push({ name: "Ciaz", category: "Car", description: "Family car", image: "images/ciaz.jpg" });
let products1 = [];
products1.push({ name: "Accord", category: "Car", description: "Family car", image: "images/accord.jpg" });
products1.push({ name: "City", category: "Car", description: "Family car", image: "images/city.jpg" });
products1.push({ name: "Civic", category: "Car", description: "Family car", image: "images/civic.jpg" });
products1.push({ name: "Jazz", category: "Car", description: "Family car", image: "images/jazz.jpg" });

/* GET users listing. */

router.get("/", function (req, res) {
    if (req.session.login) {
        res.render("home", { products, products1 });
    } else {
        res.redirect("/");
    }
});

module.exports = router;
