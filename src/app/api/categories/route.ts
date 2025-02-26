import {NextApiRequest} from "next";
import { promises as fs } from 'fs';

export const GET = async (req: NextApiRequest) => {
    const file = await fs.readFile(process.cwd() + '/public/items.json', 'utf8');
    const parsed = JSON.parse(file);
    return Response.json(parsed);
}