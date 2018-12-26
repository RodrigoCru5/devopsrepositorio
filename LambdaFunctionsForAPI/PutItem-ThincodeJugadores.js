const AWS = require('aws-sdk');

const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = (event, context, callback) => {
   const requestBody = JSON.parse(event.body);
    const idJugador = requestBody.idJugador.toString();
    var table = "ThincodeJugadores";
    var paramsGet = {
        TableName: table,
        Key:{
            "IdJugador": idJugador,
        }
    };
    
    getRecord(idJugador, paramsGet, callback, requestBody);
};

function getRecord(idJugador, paramsGet, callback, requestBody) {
    ddb.get(paramsGet, function(err, data) {
        if (err) {
            console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
            errorResponse(err.message, context.awsRequestId, callback);
        } else {
            console.log("Get Item succeeded:", JSON.stringify(data, null, 2));
            
            var paramsUpdt = {
                TableName: "ThincodeJugadores",
                Key:{
                    "IdJugador": idJugador,
                },
                UpdateExpression: "set Goles =:goles",
                ExpressionAttributeValues:{
                    ":goles": requestBody.goles,
                },
            ReturnValues:"UPDATED_NEW"
            };
            updateRequest(paramsUpdt, callback);
        }
    });
}

function updateRequest(paramsUpdt, callback) {
   ddb.update(paramsUpdt, function(err, data2) {
        if (err) {
            console.error("Unable to update item. Error JSON:", JSON.stringify(err, null, 2));
            errorResponse(err.message, context.awsRequestId, callback);
        } else {
            console.log("UpdateItem succeeded:", JSON.stringify(data2, null, 2));
            callback(null, {
                 statusCode: 200,
                    body: JSON.stringify({
                    Succeed: "Jugador actualizado correctamente en BD",
                    }),
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    },
                });
        }
    });
}

function errorResponse(errorMessage, awsRequestId, callback) {
  callback(null, {
    statusCode: 500,
    body: JSON.stringify({
      Error: errorMessage,
      Reference: awsRequestId,
    }),
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  });
}