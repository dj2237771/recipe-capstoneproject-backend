"use strict";

module.exports = (error, req, res, next) => {
  res.send({
    code: 500,
    message: `server error${error}`,
  });
};
