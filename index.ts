/* eslint-disable @typescript-eslint/no-var-requires */
import type { Request, Response } from 'express'
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { getColorFromURL, getPaletteFromURL } = require('@delirius/color-thief-node')
require('dotenv').config()

const app = express()
const port = 3000

// *Middleware
app.use(cors())
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())

// *Routes
app.post('/color', async (req: Request, res: Response) => {
  const url = req.body.url
  if (!url) {
    res.status(400).json({
      error: 'URL is required'
    })
  }

  const color = await getColorFromURL(url) as number[]
  res.json({
    color
  })
})

app.post('/palette', async (req: Request, res: Response) => {
  const url = req.body.url
  if (!url) {
    res.status(400).json({
      error: 'URL is required'
    })
  }

  const palette = await getPaletteFromURL(url) as string[]
  res.json({
    palette
  })
})

app.listen(port, () => {
  console.log(`Express server listening at http://localhost:${port}`)
})