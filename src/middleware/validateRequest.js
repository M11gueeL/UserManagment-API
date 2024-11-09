function validateRequest(req, res, next) {
  const { name, lastname, email, username, password } = req.body;

  if (!name || !lastname || !email || !username || !password) {
    return res.status(400).json({ message: 'Todos los campos son obligatorios' });
  }

  next();
}

module.exports = validateRequest;