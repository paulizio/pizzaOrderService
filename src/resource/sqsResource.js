const sqsUrl = process.env.ORDERS_QUEUE
const AWS = require('aws-sdk')
const sqs = new AWS.SQS()
const sendMessage = (params) => {
  try {
    return sqs.sendMessage({
      QueueUrl: sqsUrl,
      MessageBody: JSON.stringify({
        orderId: params.orderId,
        order: params.order,
        timestamp: params.timestamp
      })
    }).promise()
  } catch (err) {
    throw new Error(`Error sending to queue: ${err}`)
  }
}

const deleteMessage = (receiptHandle) => {
  try {
    sqs.deleteMessage({
      QueueUrl: sqsUrl,
      ReceiptHandle: receiptHandle
    }).promise()
  } catch (err) {
    throw new Error(`Error deleting message from queue: ${err}`)
  }
}
module.exports = {
  sendMessage,
  deleteMessage
}
