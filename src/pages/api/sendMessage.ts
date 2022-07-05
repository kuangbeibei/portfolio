import type { NextApiRequest, NextApiResponse } from 'next'
import { client } from 'Client'


export default async function sendMessage(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { name, email, message } = JSON.parse(req.body);

    try {
        await client.create({
            _type: 'messages',
            name,
            email,
            message
        })
        console.log('boom success~~~');

        res.status(200).json('Message Sent Succeed');
    } catch (e) {
        console.log('client sentMessage error: ', e);
        return res.status(500).json('Message Sent Failed')
    }

}
