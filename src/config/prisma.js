/*
import 'dotenv/config';

import { PrismaClient } from '@prisma/client';



import { PrismaPg} from '@prisma/adapter-pg';



const adapter = new PrismaPg({

    connectionString: process.env.DATABASE_URL

});



export const prisma = new PrismaClient({ adapter }); 

*/

import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';

// 1. Importamos el paquete completo por defecto
import pkg from '@prisma/client';

// 2. Extraemos PrismaClient de forma segura para JavaScript
const { PrismaClient } = pkg;

const pool = new pg.Pool({ 
  connectionString: process.env.DATABASE_URL 
});

const adapter = new PrismaPg(pool);

export const prisma = new PrismaClient({ adapter });