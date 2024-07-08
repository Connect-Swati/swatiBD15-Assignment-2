let express = require("express");
let cors = require("cors");
const app = express();
const port = 3000;
app.use(cors());
app.listen(port, () => {
  console.log("server is listening on port = " + port);
});
app.get("/", (req, res) => {
  res.send("welcome to Stock portfolio analysis API");
});

/*
1st front end work :
The user can see 6 most relevant stocks on the platform.

To move ahead, they need to add at least 4 stocks in their portfolio first.

While adding the stocks, the user also needs to mention the quantity of the stocks they wish to purchase.

Once added, it will generate the Market Price and Bought At price automatically.

*/

/*
2nd backend work
Once you have added all the stocks, the user can see their “Stock Portfolio”

step 1 : When the user clicks “View Returns” for each stock, they will be able to see the return for each stock they have added in their portfolio. Return = (marketPrice - boughtAt) * quantity

step 2 : Now, the user will need to calculate the return percentage based on the returns they received which will be: returnPercentage = (returns / boughtAt) * 100

step 3 : After calculating the Return Percentage, the user can now see the “Status” of their stock portfolio for each stock Profit or Loss

step 4 : And at the end, the user can see their cumulative result of the portfolio

a) Total Returns

b) Total Growth
*/

/*
sequence of api call => found via logs
Endpoint 1: Calculate the Returns of the Stocks added
Endpoint 3: Calculate the Return Percentage
Endpoint 5: Identify the Status of Stocks based on their Return Value
Endpoint 2: Calculate the Total Returns
Endpoint 4: Calculate the Total Return Percentage


*/

//--------------------------------------

/*
backend step 1 : 

When the user clicks “View Returns” for each stock, they will be able to see the return for each stock they have added in their portfolio. Return = (marketPrice - boughtAt) * quantity

Endpoint 1: Calculate the Returns of the Stocks added

Create an endpoint that takes three variables as query parameters and returns total Return Value of the stocks.

Write an Express code snippet.

Declare an endpoint calculate-returns using the get keyword.

Declare three variables boughtAt, marketPrice, and quantity to take the input.

Parse the boughtAt and marketPrice inputs as a float to calculate the return value.

Return the result as a string.

API Call: <http://localhost:3000/calculate-returns?boughtAt=300&marketPrice=400&quantity=2>

Expected Output: 200

*/

function calculateReturns(boughtAt, marketPrice, quantity) {
  let returnPrice = (marketPrice - boughtAt) * quantity;
  return returnPrice;
}

app.get("/calculate-returns", (req, res) => {
  //When the user clicks “View Returns” for each stock, they will be able to see the return for each stock they have added in their portfolio. Return = (marketPrice - boughtAt) * quantity

  console.log("Endpoint 1: Calculate the Returns of the Stocks added");
  let boughtAt = parseFloat(req.query.boughtAt);
  let marketPrice = parseFloat(req.query.marketPrice);
  let quantity = parseFloat(req.query.quantity);
  let returnPrice = calculateReturns(boughtAt, marketPrice, quantity);
  console.log(
    "for current stocks, boughtAt price = " +
      boughtAt +
      " marketPrice = " +
      marketPrice +
      " quantity = " +
      quantity +
      " return price = " +
      returnPrice,
  );
  res.send(returnPrice.toString());

  // Set a timer to clear the console after 5 minutes (300000 milliseconds)
  setTimeout(() => {
    console.clear();
    console.log("Console has been cleared.");
  }, 300000); // 300000 milliseconds = 5 minutes
});

//--------------------------------------
/*
backend step 4.1 : 

And at the end, the user can see their cumulative result of the portfolio

a) Total Returns

Endpoint 2: Calculate the Total Returns

Create an endpoint that takes four variables as query parameters and returns total return value of all the stocks.

Write an Express code snippet.

Declare an endpoint total-returns using the get keyword.

Declare four variables stock1, stock2, stock3, and stock4 to take the inputs.

Parse all the inputs as a float to calculate the total returns.

Return the result as a string.

API Call: <http://localhost:3000/total-returns?stock1=100&stock2=200&stock3=200&stock4=400>

Expected Output: 900

*/

function totalReturn(stock1, stock2, stock3, stock4) {
  let totalReturn = stock1 + stock2 + stock3 + stock4;
  return totalReturn;
}

app.get("/total-returns", (req, res) => {
  /*And at the end, the user can see their cumulative result of the portfolio

a) Total Returns
*/
  console.log("Endpoint 2: Calculate the Total Returns");
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);
  let totalReturnPrice = totalReturn(stock1, stock2, stock3, stock4);
  console.log(
    "for current stocks, stock1 = " +
      stock1 +
      " stock2 = " +
      stock2 +
      " stock3 = " +
      stock3 +
      " stock4 = " +
      stock4 +
      " total return = " +
      totalReturnPrice,
  );
  res.send(totalReturnPrice.toString());

  // Set a timer to clear the console after 5 minutes (300000 milliseconds)
  setTimeout(() => {
    console.clear();
    console.log("Console has been cleared.");
  }, 300000); // 300000 milliseconds = 5 minutes
});

//--------------------------------------

/*
backend step 2 : 

Now, the user will need to calculate the return percentage based on the returns they received which will be: returnPercentage = (returns / boughtAt) * 100

Endpoint 3: Calculate the Return Percentage

Create an endpoint that takes two variables as query parameters and returns total ReturnPercentage of the stocks.

Write an Express code snippet.

Declare an endpoint calculate-return-percentage using the get keyword.

Declare 2 variables boughtAt and returns to take the input.

Parse the boughtAt and returns as inputs as a float to calculate the return percentage.

Return the result as a string.

API Call: <http://localhost:3000/calculate-return-percentage?boughtAt=400&returns=200>

Expected Output: 50


*/

function calculateReturnPercentage(boughtAt, returns) {
  let returnPercentage = (returns / boughtAt) * 100;
  return returnPercentage;
}

app.get("/calculate-return-percentage", (req, res) => {
  /*
  Now, the user will need to calculate the return percentage based on the returns they received which will be: returnPercentage = (returns / boughtAt) * 100
  
  */
  console.log("Endpoint 3: Calculate the Return Percentage");
  let boughtAt = parseFloat(req.query.boughtAt);
  let returns = parseFloat(req.query.returns);
  let returnPercentage = calculateReturnPercentage(boughtAt, returns);
  console.log(
    "for current stocks, boughtAt price = " +
      boughtAt +
      " returns = " +
      returns +
      " return percentage = " +
      returnPercentage,
  );
  res.send(returnPercentage.toString());

  // Set a timer to clear the console after 5 minutes (300000 milliseconds)
  setTimeout(() => {
    console.clear();
    console.log("Console has been cleared.");
  }, 300000); // 300000 milliseconds = 5 minutes
});

/*
Endpoint 4: Calculate the Total Return Percentage

Create an endpoint that takes four variables as query parameters and returns total return percentage of all the stocks.

Write an Express code snippet.

Declare an endpoint total-return-percentage using the get keyword.

Declare four variables stock1, stock2, stock3, and stock4 to take the inputs.

Parse all the inputs as a float to calculate the total return percentage.

Return the result as a string.

API Call: <http://localhost:3000/total-return-percentage?stock1=10&stock2=20&stock3=20&stock4=40>

Expected Output: 90

*/

function totalReturnPercentage(stock1, stock2, stock3, stock4) {
  let totalreturnpercentage = stock1 + stock2 + stock3 + stock4;
  return totalreturnpercentage;
}
app.get("/total-return-percentage", (req, res) => {
  console.log("Endpoint 4: Calculate the Total Return Percentage");
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);
  let totalreturnpercentage = totalReturnPercentage(
    stock1,
    stock2,
    stock3,
    stock4,
  );

  console.log(
    "for current stocks, stock1 = " +
      stock1 +
      " stock2 = " +
      stock2 +
      " stock3 = " +
      stock3 +
      " stock4 = " +
      stock4 +
      " total return percentage = " +
      totalreturnpercentage,
  );
  res.send(totalreturnpercentage.toString());

  // Set a timer to clear the console after 5 minutes (300000 milliseconds)
  setTimeout(() => {
    console.clear();
    console.log("Console has been cleared.");
  }, 300000); // 300000 milliseconds = 5 minutes
});

//--------------------------------------

/*
backend step 3: 

After calculating the Return Percentage, the user can now see the “Status” of their stock portfolio for each stock Profit or Loss


Endpoint 5: Identify the Status of Stocks based on their Return Value

Create an endpoint that takes returnPercentage as query parameter and returns the stock status.

Write an Express code snippet.

Declare an endpoint status using the get keyword.

Declare a variable returnPercentage to take the input.

Apply an if condition to identify if the final stock is in “Profit” or “Loss” based on the return percentage.

If returnPercentage is greater than 0 then its profit otherwise loss

API Call: <http://localhost:3000/status?returnPercentage=90>

Expected Output: profit


*/
function findStatus(returnPercentage) {
  if (returnPercentage > 0) {
    return "profit";
  } else {
    return "loss";
  }
}
app.get("/status", (req, res) => {
  /*
  After calculating the Return Percentage, the user can now see the “Status” of their stock portfolio for each stock Profit or Loss
  */
  console.log(
    "Endpoint 5: Identify the Status of Stocks based on their Return Value",
  );
  let returnPercentage = parseFloat(req.query.returnPercentage);
  let status = findStatus(returnPercentage);
  console.log(
    "for current stocks, returnPercentage = " +
      returnPercentage +
      " status = " +
      status,
  );
  res.send(status);

  // Set a timer to clear the console after 5 minutes (300000 milliseconds)
  setTimeout(() => {
    console.clear();
    console.log("Console has been cleared.");
  }, 300000); // 300000 milliseconds = 5 minutes
});

/*
debugging output : 

server is listening on port = 3000
Endpoint 1: Calculate the Returns of the Stocks added
for current stocks, boughtAt price = 850 marketPrice = 1100 quantity = 1 return price = 250
Endpoint 1: Calculate the Returns of the Stocks added
for current stocks, boughtAt price = 300 marketPrice = 200 quantity = 1 return price = -100
Endpoint 1: Calculate the Returns of the Stocks added
for current stocks, boughtAt price = 700 marketPrice = 1300 quantity = 1 return price = 600
Endpoint 1: Calculate the Returns of the Stocks added
for current stocks, boughtAt price = 1200 marketPrice = 1600 quantity = 1 return price = 400
Endpoint 3: Calculate the Return Percentage
for current stocks, boughtAt price = 850 returns = 250 return percentage = 29.411764705882355
Endpoint 3: Calculate the Return Percentage
for current stocks, boughtAt price = 300 returns = -100 return percentage = -33.33333333333333
Endpoint 3: Calculate the Return Percentage
for current stocks, boughtAt price = 700 returns = 600 return percentage = 85.71428571428571
Endpoint 3: Calculate the Return Percentage
for current stocks, boughtAt price = 1200 returns = 400 return percentage = 33.33333333333333
Endpoint 5: Identify the Status of Stocks based on their Return Value
for current stocks, returnPercentage = 29.41 status = profit
Endpoint 5: Identify the Status of Stocks based on their Return Value
for current stocks, returnPercentage = -33.33 status = loss
Endpoint 5: Identify the Status of Stocks based on their Return Value
for current stocks, returnPercentage = 85.71 status = profit
Endpoint 5: Identify the Status of Stocks based on their Return Value
for current stocks, returnPercentage = 33.33 status = profit
Endpoint 2: Calculate the Total Returns
for current stocks, stock1 = 250 stock2 = -100 stock3 = 600 stock4 = 400 total return = 1150
Endpoint 4: Calculate the Total Return Percentage
for current stocks, stock1 = 29.41 stock2 = -33.33 stock3 = 85.71 stock4 = 33.33 total return percentage = 115.11999999999999
 
*/
