
module.exports = {
    get : function(req, res){

    },

    create : function(req, res){
        customer = req.body.customer;
        // personal
        let firstName = customer.firstName;
        let lastName = customer.lastName;
        let title = customer.title ? customer.title : "";
        // address
        let country = customer.country;
        let city = customer.city;
        let street = customer.street;
        // contactability
        let email = customer.email;
        let phone = customer.phoneNumber;

        if (lastName == null || firstName == null || email == null || country == null){
            return res.status(400).json({'error' : 'missing parameters'});
        }

        console.log (' API create / customer ', req.body);

        return res.status(200).json({message : ' customer created'});
    }
}