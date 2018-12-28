const AWS = require('aws-sdk');

const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = (event, context, callback) => {
    //parse JSON body request
    const requestBody = JSON.parse(event.body);
    //get th id and convert to string
    const idJugador = requestBody.idJugador.toString();
    var table = "ThincodeJugadores";
    //params for item will be update
    var paramsUpdt = {
            TableName: table,
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
};

function updateRequest(paramsUpdt, callback) {
   //call function update from AWS DynamoDB and pass the params will be update
   ddb.update(paramsUpdt, function(err, data2) {
        if (err) {
            //if there is an error, send the error to javascript console and send like a response
            console.error("Unable to update item. Error JSON:", JSON.stringify(err, null, 2));
            errorResponse(err.message, context.awsRequestId, callback);
        } else {
            //if there is not an error, send to javascript console and notify to client with a succeed menssage
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
  //this function will be call when there is an error in a specific part of the script,
  //notify to a client like a HTTP response what was the error
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
