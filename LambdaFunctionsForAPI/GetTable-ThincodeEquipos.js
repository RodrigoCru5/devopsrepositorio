const AWS = require('aws-sdk');

const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = (event, context, callback) => {
    var params = { 
    TableName: 'ThincodeEquipos', 
}; 

ddb.scan(params, function(err, data) { 
    if (err) { 
     console.log(JSON.stringify(err, null, 2)); 
    } else { 
        var sortData = sortTable(data.Items);
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
    var sorted = dataItems.sort((a, b) => b.POINTS - a.POINTS);
    return sorted;
}