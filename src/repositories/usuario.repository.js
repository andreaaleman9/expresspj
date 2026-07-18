import { prisma } from "../config/prisma.js";

export const findByEmail = (email) => {
  return prisma.usuario.findUnique({ where: { email } });
};

export const findById = (id) => {
  return prisma.usuario.findUnique({ where: { id } });
};

export const save = ({ nombre, email, passwordHash }) => {
  return prisma.usuario.create({
    data: { nombre, email, passwordHash},
  });
};

export const updatePasswordHash = (id, passwordHash) => {
  return prisma.usuario.update({ where: { id }, data: { passwordHash } });
};
