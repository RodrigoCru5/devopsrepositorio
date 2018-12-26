const AWS = require('aws-sdk');

const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = (event, context, callback) => {
    const requestBody = JSON.parse(event.body);
    const teamId = requestBody.teamId.toString();
    var table = "ThincodeEquipos";
    var paramsGet = {
        TableName: table,
        Key:{
            "EquiposID": teamId,
        }
    };
    
    getRecord(teamId, paramsGet, callback, requestBody);
};



function getRecord(teamId, paramsGet, callback, requestBody) {
    ddb.get(paramsGet, function(err, data) {
        if (err) {
            console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
            //errorResponse(err.message, context.awsRequestId, callback);
        } else {
            console.log("Get Item succeeded:", JSON.stringify(data, null, 2));
            const tdif = requestBody.gf - requestBody.gc;

            var paramsUpdt = {
                TableName: "ThincodeEquipos",
                Key:{
                    "EquiposID": teamId,
                },
                UpdateExpression: "set WIN =:win, LOSE =:lose, TIE =:tie, GF =:gf, POINTS =:points, GC =:gc, DIF =:dif",
                ExpressionAttributeValues:{
                    ":win": requestBody.win,
                    ":gf": requestBody.gf,
                    ":gc": requestBody.gc,
                    ":points": requestBody.points,
                    ":lose": requestBody.lose,
                    ":tie": requestBody.tie,
                    ":dif": tdif
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
            //errorResponse(err.message, context.awsRequestId, callback);
        } else {
            console.log("UpdateItem succeeded:", JSON.stringify(data2, null, 2));
            callback(null, {
                 statusCode: 200,
                    body: JSON.stringify({
                    Succeed: "Equipo registrado correctamente en BD",
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