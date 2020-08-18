import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import mainRoute from './routes/index'

const app = express()
const PORT = process.env.PORT || 3000

app.use(morgan('tiny'))
app.use(cors())

app.use('/all-images', mainRoute)

app.listen(PORT, () => {
  console.log('server is listening')
})
