import { NextApiRequest, NextApiResponse } from 'next'
import DB from '@database'

const allAvos = async (request: NextApiRequest, response: NextApiResponse) => {
  const db = new DB()
  const id = request.query.id
  const entry = await db.getById(id as string)
	
	if (!entry) {
		response.setHeader('Content-type', 'application/json')
		response.status(404).json(entry)
	} else {
		response.statusCode = 200 // ok
		response.setHeader('Content-type', 'application/json')
		response.end(JSON.stringify(entry))
	}
}

export default allAvos
