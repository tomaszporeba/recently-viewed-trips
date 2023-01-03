import type { NextApiRequest, NextApiResponse } from 'next'
import { Cards, cards } from '../../mocks/cardsMock';

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Cards[]>
) {
    res.status(200).json(cards)
}
