exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: 'KKWONGS',
      age: 28,
      email: 'kihyun5741@gmail.com'
    })
  }
}