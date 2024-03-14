const express = require('express')

const app = express()

async function asyncEven (i) {
  console.log('async even', i)
}

async function asyncOdd (i) {
  console.log('async odd', i)
}

// Why we have to wrap setTimeout in a promise?
function setTimeoutPromise (delay) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), delay)
  })
}

// Why we have to wrap setImmediate in a promise?
function setImmediatePromise () {
  return new Promise((resolve) => {
    setImmediate(() => resolve())
  })
}

function setTimeoutOnly (delay) {
  setTimeout(() => {}, delay)
}

app.get('/block-odd', async function odd (req, res) {
  for (let i = 1; i < 10; i += 2) {
    // console.log('odd', i);
    // await asyncOdd(i)
    console.log('odd', i)
    // await setTimeoutPromise(0)
    // await setImmediatePromise();
    setTimeoutOnly(0)
  }
  res.send('odd! ok')
})

app.get('/block-even', async function even (req, res) {
  for (let i = 0; i < 10; i += 2) {
    // console.log('even', i);
    // await asyncEven(i)
    console.log('even', i)
    // await setTimeoutPromise(0)
    // await setImmediatePromise();
    setTimeoutOnly(0)

  }
  res.send('even! ok')
})

const PORT = process.env.PORT || 1555
let server = app.listen(PORT, () => console.log('server listening on :' + PORT))
