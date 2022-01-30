const Express = require("express");
var bodyParser = require("body-parser");
var BirdsRouter = require("./newRouter");
var cors = require("cors");
var auth = require("basic-auth");
var jwt = require("jsonwebtoken");
var mongoose = require("mongoose");
const BookModel = require("./models/BookModel");
const mainUser = { username: "adc@gmail.com", password: "123456" };
const secretKey = "secret";
const app = Express();
app.use(bodyParser.json());
app.use("/", BirdsRouter);
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://react-mongo:Mongo%40123%4012@cluster0.bz9wq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then(() => console.log("connection successfull"))
  .catch((e) => console.log(e, "somwthing went worng"));

// BOOK crud

app.post("/addbook", (req, res) => {
  try {
    const reqObj = req.body;
    const bookModelObj = new BookModel(reqObj);
    bookModelObj.save((error) => {
      // console.log(error.message);
      if (error) {
        res.json({ success: false, message: error.message });
      } else {
        res.json({ success: true });
      }
    });
  } catch (e) {
    console.log(e);
    res.statusCode(500).json({ success: false });
  }
});

app.get("/getbooks", async (req, res) => {
  const resp = await BookModel.find({}).sort({ description: -1 });
  console.log(resp);
  res.send(JSON.stringify(resp));
});

app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  const response = await BookModel.deleteOne({ _id: id });
  if (response && response.deletedCount > 0) {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

// jwt
app.post("/login", (req, res) => {
  console.log(req.body);
  const email = { email: req.body.email };
  const token = jwt.sign(
    {
      exp: Math.floor(Date.now() / 1000) + 10,
      data: email,
    },
    secretKey
  );
  res.json({ token: token });
});

function authJwtMw(req, res, next) {
  const authorization = req.headers.authorization;
  const splitArr = authorization.split(" ");
  const token = splitArr[1];
  try {
    jwt.verify(token, secretKey);
    next();
  } catch (e) {
    res.send(e);
  }
}

app.get("/verify-user", authJwtMw, function (req, res) {
  // console.log("hello user", req.headers);
  res.send("hello user");
});

//basic

// function authMw(req, res, next) {
//   const user = auth(req);
//   if (
//     user &&
//     user.name === mainUser.username &&
//     user.pass === mainUser.password
//   ) {
//     return next();
//   }
//   res.send("user not allowed");
// }

//basic auth

// app.get("/verify-user", authMw, function (req, res) {
//   console.log("hello user");
//   res.send("hello user");
// });

app
  .route("/book")
  .get(function (req, res) {
    res.send("Get a random book");
  })
  .post(function (req, res) {
    res.send("Add a book");
  })
  .put(function (req, res) {
    res.send("Update the book");
  });

function deleteMw(req, res, next) {
  console.log("deleteMw");
  next();
}

function deleteMw2(req, res, next) {
  console.log("deleteMw2");
  next();
}

app.post("/delete/:chsv", deleteMw, deleteMw2, (req, res) => {
  // console.log(req.params.from, req.params.to);
  console.log(req.query);
  console.log(req.body);
  res.status(200).send("<h1>" + req.params.chsv + "</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>about</h1>");
});

app.get("/hello", (req, res) => {
  res.json([
    {
      id: "0",
      author: "Alejandro Escamilla",
      width: 5616,
      height: 3744,
      url: "https://unsplash.com/photos/yC-Yzbqy7PY",
      download_url: "https://picsum.photos/id/0/5616/3744",
    },
    {
      id: "1",
      author: "Alejandro Escamilla",
      width: 5616,
      height: 3744,
      url: "https://unsplash.com/photos/LNRyGwIJr5c",
      download_url: "https://picsum.photos/id/1/5616/3744",
    },
  ]);
});

app.listen(3002, () => console.log("server started at 3002"));
//localhost:3002
