// app/src/controllers/user.controller.ts

/**
 * Controlador de Usuarios
 * ------------------------
 * Este archivo contiene los controladores que gestionan las peticiones
 * relacionadas con la entidad `User`. 
 *
 * Patrón utilizado:
 *  - DTO (Data Transfer Object): Para tipar los datos de entrada.
 *  - DAO (Data Access Object): Para abstraer la interacción con la base de datos.
 *
 * Controladores definidos:
 *  - createUser: Crea un nuevo usuario en la base de datos.
 *  - getUsers: Obtiene la lista de todos los usuarios.
 */

import { Request, Response } from "express";
import * as userDao from "../dao/user.dao";
import { CreateUserDto } from "../dto/user.dto";

/**
 * Crea un nuevo usuario en el sistema.
 *
 * @param req - Objeto de solicitud HTTP, se espera un cuerpo con los datos del usuario ({ name, email }).
 * @param res - Objeto de respuesta HTTP.
 *
 * @returns {Promise<Response>} - Devuelve el usuario creado en formato JSON con código de estado 201.
 *
 * @example
 * POST /api/users
 * {
 *   "name": "John Doe",
 *   "email": "john@example.com"
 * }
 */
export const createUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    const dto: CreateUserDto = req.body;
    const user = await userDao.createUser(dto);
    return res.status(201).json(user);
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
};

/**
 * Obtiene todos los usuarios registrados en la base de datos.
 *
 * @param _req - Objeto de solicitud HTTP (no utilizado en este caso).
 * @param res - Objeto de respuesta HTTP.
 *
 * @returns {Promise<Response>} - Devuelve un arreglo con todos los usuarios en formato JSON.
 *
 * @example
 * GET /api/users
 */
export const getUsers = async (_req: Request, res: Response): Promise<Response> => {
  try {
    const users = await userDao.getUsers();
    return res.json(users);
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
};
