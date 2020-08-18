import { Router } from 'express'
import { fetchData } from '../utils/fetchImages'

const router = Router()

router.get('/', async (req, res) => {
  fetchData(res)
})

export default router
