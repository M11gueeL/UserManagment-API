const User = require('../models/userModel');

class UserService {
  async getAllUsers() {
    return await User.findAll();
  }

  async getUserById(id) {
    const user = await User.findById(id);
    if (!user) {
      throw new Error('Usuario no encontrado');
    }
    return user;
  }

  async createUser(userData) {
    return await User.create(userData);
  }

  async updateUser(id, userData) {
    const updated = await User.update(id, userData);
    if (!updated) {
      throw new Error('Usuario no encontrado');
    }
    return { id, ...userData };
  }

  async deleteUser(id) {
    const deleted = await User.delete(id);
    if (!deleted) {
      throw new Error('Usuario no encontrado');
    }
    return { message: 'Usuario eliminado correctamente' };
  }
}

module.exports = new UserService();