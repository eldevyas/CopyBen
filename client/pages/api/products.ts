import type { NextApiRequest, NextApiResponse } from 'next'
import products from '@/data/Products';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        res.status(200).json(products)
    } else {
        res.status(405).end()
    }
}
