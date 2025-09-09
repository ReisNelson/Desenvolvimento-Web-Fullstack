import { Router } from "express";
import {pool} from './db.js'
const r = Router()

//GET http://localhost:3000/api/db/health

r.get('/db/health', async(_,res) => {
    try{
        const [rows] = await pool.query('SELECT 1 AS db_ok')
        res.json({ok:true, db: rows[0].db_ok})
    }catch{
        res.status(500).json({ok: false, db: 'down'})
    }
})

//GET http://localhost:3000/api/users
r.get('/users', async(_,res) =>{
    try{
        const [rows] = await pool.query(
            'SELECT id, name, email, created_at FROM users ORDER BY id DESC'
        )
        res.json(rows)
    }catch{
        res.status(500).json({error: 'Erro ao listar usuário'})
    }
})
export default r