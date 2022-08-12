const dynamodb = require('aws-sdk/clients/dynamodb')
const docClient = new dynamodb.DocumentClient()
const tableName = process.env.ORDERS_TABLE
const create = (item) => {
  try {
    return docClient.put({
      TableName: tableName,
      Item: item,
      ConditionExpression: `attribute_not_exists(orderId)`
    }).promise()
  } catch (err) {
    throw new Error(`Error creating new order: ${err}`)
  }
}

const getOrder = (key) => {
  try {
    return docClient.get({
      TableName: tableName,
      Key: key
    }).promise()
  } catch (err) {
    throw new Error(`Error fetching order: ${err}`)
  }
}
module.exports = {
  create,
  getOrder
}
