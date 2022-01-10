module.exports = {
  handleErrorResponse: (error, res) => {
    console.log(error);
    return res.status(500).json({
      result : "ERROR",
      message : error
    });
  }
}