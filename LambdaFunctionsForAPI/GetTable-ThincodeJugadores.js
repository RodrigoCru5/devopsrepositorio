const AWS = require('aws-sdk');

const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = (event, context, callback) => {
    //set params to get from table
    var params = { 
    TableName: 'ThincodeJugadores', 
}; 

//call function scan from AWS DynamoDB and pass params will be find
ddb.scan(params, function(err, data) { 
    if (err) { 
     //if there is an error notify to javascript console
     console.log(JSON.stringify(err, null, 2)); 
    } else { 
        //if all be fine call function to sort
        var sortData = sortTable(data.Items);
        //create an HTTP response and send items to client
        const response = {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
            },
            body: JSON.stringify(sortData),
        };
        callback(null, response);
    } 
}); 
};

function sortTable(dataItems)
{
    //sort items by the way desire
    var sorted = dataItems.sort((a, b) => b.Goles - a.Goles);
    return sorted;
}