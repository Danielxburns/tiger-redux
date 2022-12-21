const mongoose = require('mongoose');
const database ="tigerblogs-redux"
mongoose.connect(`mongodb://localhost/${database}`, { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log(`connected to ${database} database`);
});

/* -------------MODELS ------------ */

const postSchema = mongoose.Schema({
  title: String,
  username: String,
  userId: String,
  category: String,
  body: String,
  date: { type: Date, default: Date.now },
  reactions: {
    likes: Number,
    dislikes: Number,
    hearts: Number
  }
});
const Post = mongoose.model('Post', postSchema);

const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  username: String,
  email: String,
  password: String,
  photo: String
});
const User = mongoose.model('User', userSchema);

/* --------------- METHODS --------------- */

const getAllUsers = (callback) => {
  User.find({}, (err, result) => {
    if(err) {
      console.log('inside db.getAllUsers error :>> ', err);
      callback(err)
    } else {
    /*   console.log('inside db.getAllUsers result:>> ', result); */
      callback(null, result)
    }
  })
}

const saveNewUser = (user, callback) => {
  console.log('user data passed to saveNewUser :>> ', user);
  const newUser = new User(user)
  console.log('newUser document created:>> ', newUser);
  newUser.save((err, result)=>{
    if(err) {
      callback(err)
    } else {
      console.log('new user saved :>> ', result);
      callback(null, result)
    }
  })
}

const getAllPosts = (callback) => {
  Post.find({}, (err, result) => {
    if(err) {
      console.log('inside db.getAllPosts error :>> ', err);
      callback(err)
    } else {
    /*   console.log('inside db.getAllPosts result:>> ', result); */
      callback(null, result)
    }
  })
}

const saveNewPost = (post, callback) => {
  console.log('post data passed to saveNewpost :>> ', post);
  const newPost = new Post(post)
  console.log('newPost document created:>> ', newPost);
  newPost.save((err, result)=>{
    if(err) {
      callback(err)
    } else {
      console.log('new post saved :>> ', result);
      callback(null, result)
    }
  })
}

module.exports = { getAllUsers, saveNewUser, getAllPosts, saveNewPost }
