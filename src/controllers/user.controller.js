const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createUser = async (req, res) => {
  const { email, name } = req.body;
  const result = await prisma.users.create({
    data: {
      email: email,
      name: name,
      // posts: posts, 
    },
  });
  res.json(result);
};

exports.getUsers = async (req, res) => {
  const users = await prisma.users.findMany({
  });
  res.json(users);
};


exports.getUserById = async (req, res) => {
  const { id } = req.params;
  const users = await prisma.users.findUnique({
    where: { id: id },
  });
  res.json(users);
};

exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const { email, name, posts }  = req.body;
  const result = await prisma.users.update({
    where: { id: id },
    data: {
      email: email,
      name: name,
      posts: posts,
    },
  });
  res.json(result);
};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  const users = await prisma.users.delete({
    where: { id: id },
  });
  res.json(users);
};
