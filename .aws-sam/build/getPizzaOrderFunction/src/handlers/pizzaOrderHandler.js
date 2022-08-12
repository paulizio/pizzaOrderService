/**
 * A Lambda function that receives order from SQS and saves it to DynamoDB.
 */
const dynamoResource = require('../resource/dynamoResource')
const sqsResource = require('../resource/sqsResource')
exports.pizzaOrderHandler = async (event) => {
    const message = event?.Records[0]
    const createParams = JSON.parse(message.body)
    console.info(`Inserting order to dynamo: ${JSON.stringify(createParams)}`)
    await dynamoResource.create(createParams)
    console.info(`Deleting message with receipthandle: ${message.receiptHandle}`)
    await sqsResource.deleteMessage(message.receiptHandle)
}
