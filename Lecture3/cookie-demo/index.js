const express = require("express");
const app = express();
const cookieparser = require("cookie-parser");

// app.use(cookieparser()); // for normal cookie (not a signed cookie)
app.use(cookieparser("thisisnotagoodsecret")); // for signed cookie, we have to pass a string called secret string

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/set-cookie", (req, res) => {
  res.cookie("mode", "dark");
  res.cookie("location", "new delhi");
  res.cookie("username", "abhi");
  res.send("Send you a cookie");
});

// in each request, browser send those cookies and we can access them using req.cookies

app.get("/greet", (req, res) => {
  // now i want to access cookie here
  console.log(req.cookies);
  res.send("namaste " + req.cookies.username);
});

// signed cookies

// In browser, we can go and manually change the value of cookies, so that's not a good thing if user can manually
// change the value of cookie

// So here comes the concept of signed cookies

app.get("/getSignedCookie", (req, res) => {
  res.cookie("food", "grape", { signed: true }); // the value inside the browser for food is stored in some different pattern
  // currently it is storing like "s%3Agrape.OA316%2B4R6yww%2B3S8F1Z5EdB54emR1AHuiHHlLOMOx8M"

  // if someone change this cookie from the server side, then i will get to know about this
  // you are not encrypting the value or cookie, you are just trying to maintain the integrity of data that no one should
  // try to change this data
  res.send("signed cookie");
});

app.get("/signedcookies", (req, res) => {
  res.send(req.signedCookies); // to get signedcookies
  // if cookie is not changed, output is {"food":"grape"}
  // if cookie get changed by someone, then output is {"food":false}
});

// Limitations of cookies:

// Suppose user change its browser, so infomation might get lost. (so we should not place some crucial data which we do not want to be lost)
// if accidently user clear his cookies, then all cookies data will get lost
// The cookies has there own limit (limitation in storing data) can't store more amount of data



app.listen(4000, () => {
  console.log("Server started");
});
