import express, { Express, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const app: Express = express();
const PORT = 3000;

async function main(): Promise<any> {
    console.log("Buscando usuários...");
    try {
        const users = await prisma.user.findMany();
        return users;
    } catch (error) {
        console.error("Erro ao buscar usuários:", error);
        throw error;
    }
}

app.get('/', async (req: Request, res: Response) => {
    try {
        const users = await main();
        res.json(users); // Envia os usuários como resposta
    } catch (error) {
        res.status(500).send('Erro ao buscar usuários');
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
