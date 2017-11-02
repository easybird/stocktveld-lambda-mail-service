import mailTo from "./mailTo";

// eslint-disable-next-line import/prefer-default-export
export const hello = (event, context, cb) => {
  const p = new Promise((resolve, reject) => {
    const body = JSON.parse(event.body);

    console.log("body", body);

    mailTo(body)
      .then(info =>
        resolve({
          statusCode: 200,
          headers: {
            "Access-Control-Allow-Origin": "*" // Required for CORS support to work
          }
          // body: JSON.stringify({
          //   body,
          //   info
          // })
        })
      )
      .catch(err =>
        reject({
          statusCode: 500,
          headers: {
            "Access-Control-Allow-Origin": "*" // Required for CORS support to work
          },
          body: JSON.stringify({
            err
          })
        })
      );
  });

  p
    .then(response => {
      return cb(null, response);
    })
    .catch(e => {
      console.log("fail", e);
      return cb(e);
    });
};
