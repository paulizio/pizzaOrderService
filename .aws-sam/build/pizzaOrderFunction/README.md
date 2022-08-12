# pizzaOrderService

Simple AWS sam practice project to test out SQS queue:

- Send pizza order as POST to /orders endpoint -> Order is sent to SQS queue
- Order is received by pizzaOrderHandler lambda which saves it to dynamoDB
- Get order by orderId from /orders/{orderId}