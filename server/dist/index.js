"use strict";

var _express = _interopRequireDefault(require("express"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const zomato = (0, _express.default)();
zomato.use(_express.default.json());
zomato.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "server started"
  });
});
const Port = 4000;
zomato.listen(Port, () => {
  console.log("server started !!!");
});