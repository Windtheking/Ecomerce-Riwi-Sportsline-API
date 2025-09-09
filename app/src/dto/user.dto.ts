// app/src/dto/user.dto.ts

/**
 * DTO de Usuario
 * ---------------
 * Este archivo define los Data Transfer Objects (DTO) relacionados con la entidad `User`.
 * 
 * Los DTO se utilizan para:
 *  - Estandarizar los datos que se reciben o envían a través de la API.
 *  - Validar y tipar los objetos que entran a los controladores.
 *  - Evitar exponer directamente los modelos de la base de datos.
 */

/**
 * Objeto de transferencia de datos para la creación de usuarios.
 *
 * @property {string} name - Nombre completo del usuario.
 * @property {string} email - Dirección de correo electrónico única del usuario.
 *
 * @example
 * const dto: CreateUserDto = {
 *   name: "David Mtz",
 *   email: "david@example.com"
 * };
 */
export interface CreateUserDto {
  name: string;
  email: string;
}
