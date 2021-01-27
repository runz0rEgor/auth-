const express = require('express')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 5000
const MONGO_URI = 'mongodb+srv://runz0r:Labartded123@cluster0.wci4b.mongodb.net/auth?retryWrites=true&w=majority'
const authRouter = require('./authRouter')

const app = express()

app.use(express.json())
app.use('/auth', authRouter)


const start = async() => {
  try {
    await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true} ,() => {
      console.log('mongo up');
    })
    app.listen(PORT, () => {
      console.log('server up');
    })
  } catch (error) {
    console.log(error)
  }
}

start()