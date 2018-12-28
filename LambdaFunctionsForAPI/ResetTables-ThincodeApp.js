const AWS = require('aws-sdk');

const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = (event, context, callback) => {
    //parse Json body request
    const bodyRequest = JSON.parse(event.body);
    
    if(bodyRequest.action === 'reset')
    {
        //if the action is correct call this functions
        resetTeamsTable(callback);
        resetPlayersTable(callback);
    }
    else
    {
        //if there is an error, notify to client like an error response
        callback(null, {
                statusCode: 500,
                body: JSON.stringify({
                    Error: 'Ninguna accion corresponde a la indicada',
                    event: bodyRequest,
                }),
                headers: {
                    'Access-Control-Allow-Origin': '*',
            },
        });
    }
    //if all be good, notify to client with a succeed response
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            succeed: "Las tablas se han reseteado correctamente",
        }),
    };
    callback(null, response);
};


function resetTeamsTable(callback)
{
    var table = "ThincodeEquipos";
    var ids;
    var paramsUpdt;
    //set params with default values for each id in table
    for(var id = 1; id <= 18; id++)
    {
        ids = id.toString();
        paramsUpdt = {
            TableName: table,
            Key:{
                "EquiposID": ids,
            },
              UpdateExpression: "set WIN =:win, LOSE =:lose, TIE =:tie, GF =:gf, POINTS =:points, GC =:gc, DIF =:dif",
            ExpressionAttributeValues:{
                ":win": 0,
                ":lose": 0,
                ":tie": 0,
                ":gf": 0,
                ":gc": 0,
                ":points": 0,
                ":dif": 0
            },
            ReturnValues:"UPDATED_NEW"
        };
        //call function for item will be update
        updtRecord(paramsUpdt, ids, table);
    }
}

function resetPlayersTable(callback)
{
    var table = "ThincodeJugadores";
    var ids;
    var paramsUpdt;
    //set params with default values for each id in table
    for(var id = 1; id <= 90; id++)
    {
        ids = id.toString();
        paramsUpdt = {
            TableName: table,
            Key:{
                "IdJugador": ids,
            },
              UpdateExpression: "set Goles =:goles",
            ExpressionAttributeValues:{
                ":goles": 0,
            },
            ReturnValues:"UPDATED_NEW"
        };
        //call function for item will be update
        updtRecord(paramsUpdt, ids, table);
    }
}

function updtRecord(paramsUpdt, ids, table) {
   //call function update from AWS DynamoDB and pass the params will be update
   ddb.update(paramsUpdt, function(err, data2) {
        if (err) {
            //if there is an error, send the error to javascript console and send like a response
            console.error("Unable to update item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            //if there is not an error, send to javascript console and notify to client with a succeed menssage
            console.log("Update item ID: ", ids, "succeeded in table: ", table);
        }
    });
}