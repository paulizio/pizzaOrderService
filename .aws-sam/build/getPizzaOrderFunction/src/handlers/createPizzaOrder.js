/**
 * A Lambda function that sends order to SQS queue.
 */
const sqsResource = require('../resource/sqsResource')
exports.createPizzaOrderHandler = async (event) => {
    const body = JSON.parse(event.body)
    const params = {
        orderId: body.orderId,
        order: body.order,
        timestamp: new Date().toISOString()
    }
    await sqsResource.sendMessage(params)
    const response = {
        statusCode: 201,
        body: JSON.stringify(body)
    }
    console.info(`response from: ${event.path} statusCode: ${response.statusCode} body: ${response.body}`);
    return response;
}
