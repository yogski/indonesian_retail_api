module.exports = {
  handleErrorResponse: (error, res) => {
    console.log(error);
    return res.status(500).json({
      result : "ERROR",
      message : error
    });
  },
  handleFailedValidationResponse: (error, res) => {
    console.dir(error, {depth: null});
    return res.status(400).json({
      result : "ERROR",
      message : "Incomplete request. Please check request header or body."
    })
  },
  handleCustomLogicResponse: (message, res) => {
    console.log(message);
    return res.status(400).json({
      result : "ERROR",
      message : message
    })
  }
}