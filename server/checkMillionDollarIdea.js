//const checkMillionDollarIdea = (req, res, next) => {
//  const totalValue = req.body.numWeeks * req.body.weeklyRevenue;
//  if ((totalValue < 1000000) || !req.body.numWeeks || !req.body.weeklyRevenue
//  || !Number(req.body.numWeeks) || !Number(req.body.weeklyRevenue)) {
//    return res.status(400).send();
//  } next();
//};

const checkMillionDollarIdea = (req, res, next) => {
  const { numWeeks, weeklyRevenue } = req.body;
  const totalMoney = Number(numWeeks) * Number(weeklyRevenue);
  if (!numWeeks || !weeklyRevenue || isNaN(totalMoney) || totalMoney < 1000000) {
    res.status(400).send();
  } else {
    next();
  }
}



// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
