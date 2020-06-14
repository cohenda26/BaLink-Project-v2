module.exports = {
    list : function(req, res){
        res.json( { status : "Ok",
                    data : [ { code : '001', name : 'Jerusalem'}, 
                             { code : '002', name : 'Tel Aviv'},
                             { code : '003', name : 'Haifa'},
                             { code : '004', name : 'Eilat'} ]
                    });
    }

}