function errorHandler(err, req, res, next) {
  console.error(err.stack);

  if (err.message === 'Usuario no encontrado') {
    return res.status(404).json({ message: err.message });
  }

  res.status(500).json({ message: 'Error interno del servidor' });
}

module.exports = errorHandler;