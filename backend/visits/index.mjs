import { DynamoDBClient, UpdateItemCommand } from '@aws-sdk/client-dynamodb'

// @aws-sdk/client-dynamodb ships with the Lambda nodejs20.x runtime — no bundling needed.
const ddb = new DynamoDBClient({})
const TABLE = process.env.TABLE_NAME

export const handler = async () => {
  try {
    const res = await ddb.send(
      new UpdateItemCommand({
        TableName: TABLE,
        Key: { id: { S: 'site' } },
        UpdateExpression: 'ADD #c :one',
        ExpressionAttributeNames: { '#c': 'count' },
        ExpressionAttributeValues: { ':one': { N: '1' } },
        ReturnValues: 'UPDATED_NEW',
      }),
    )
    const count = Number(res.Attributes?.count?.N ?? '0')
    return json(200, { count })
  } catch (err) {
    console.error('visits error', err)
    return json(500, { error: 'counter_failed' })
  }
}

function json(statusCode, body) {
  return {
    statusCode,
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(body),
  }
}
