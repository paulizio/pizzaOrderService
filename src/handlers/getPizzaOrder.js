const dynamoResource = require('../resource/dynamoResource')
exports.getPizzaOrderHandler = async (event) => {
    const { orderId } = event.pathParameters
    const { Item } = await dynamoResource.getOrder({ orderId })
    const response = {
        statusCode: 200,
        body: JSON.stringify(Item)
    }
    return response;
}
