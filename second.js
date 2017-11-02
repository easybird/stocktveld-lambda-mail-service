// eslint-disable-next-line import/prefer-default-export
export const hello = (event, context, cb) => {
  const p = new Promise(resolve => {
    resolve("success");
  });
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: "Go Serverless Webpack (Ecma Script) v1.0! Second module!",
      // event: event,
      // input: event && event.input,
      body: event && event.body
    })
  };
  p.then(() => cb(null, response)).catch(e => cb(e));
};
