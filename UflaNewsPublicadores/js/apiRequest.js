
try{
    $.ajax({ 
        type: "GET",
        dataType: "json",
        crossDomain: true,
        url: 'http://localhost:3000/publicadors?id=5ecdab7139336e1eb46ad029&admin=1',
        success: function(data){        
            console.log(data);
        }
    });
}
catch (err)
{
    console.log(err);
}
