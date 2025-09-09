// app/src/dao/user.dao.ts

/**
 * DAO de Usuarios
 * ----------------
 * Este archivo contiene las funciones de acceso a datos (DAO) para la entidad `User`.
 * 
 * El patrón DAO (Data Access Object) encapsula la lógica de acceso a la base de datos,
 * separándola de los controladores y asegurando una mejor organización del código.
 *
 * Funciones definidas:
 *  - createUser: Inserta un nuevo usuario en la base de datos.
 *  - getUsers: Recupera todos los usuarios almacenados.
 */

import User, { UserCreationAttributes } from "../models/user.model";

/**
 * Inserta un nuevo usuario en la base de datos.
 *
 * @param data - Objeto con los atributos necesarios para crear el usuario.
 *               Utiliza `UserCreationAttributes`, lo que permite omitir campos autogenerados (ej. id).
 * 
 * @returns {Promise<User>} - Promesa que resuelve al usuario creado.
 *
 * @example
 * const newUser = await createUser({ name: "David", email: "david@example.com" });
 */
export const createUser = async (data: UserCreationAttributes) => {
  return await User.create(data);
};

/**
 * Recupera todos los usuarios almacenados en la tabla `users`.
 *
 * @returns {Promise<User[]>} - Promesa que resuelve a un arreglo con todos los usuarios.
 *
 * @example
 * const users = await getUsers();
 * console.log(users); // [{ id: 1, name: "David", email: "david@example.com" }, ...]
 */
export const getUsers = async () => {
  return await User.findAll();
};
