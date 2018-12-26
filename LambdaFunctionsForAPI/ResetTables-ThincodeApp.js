const AWS = require('aws-sdk');

const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = (event, context, callback) => {
    const bodyRequest = JSON.parse(event.body);
    
    if(bodyRequest.action === 'reset')
    {
        resetTeamsTable(callback);
        resetPlayersTable(callback);
    }
    else
    {
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
        updtRecord(paramsUpdt, ids, table);
    }
}

function resetPlayersTable(callback)
{
    var table = "ThincodeJugadores";
    var ids;
    var paramsUpdt;
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
        updtRecord(paramsUpdt, ids, table);
    }
}

function updtRecord(paramsUpdt, ids, table) {
   ddb.update(paramsUpdt, function(err, data2) {
        if (err) {
            console.error("Unable to update item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("Update item ID: ", ids, "succeeded in table: ", table);
        }
    });
}