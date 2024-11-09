const db = require('../config/database');

class User {
  static async findAll() {
    const [rows] = await db.query('SELECT * FROM users');
    return rows;
  }

  static async findById(id) {
    const [rows] = await db.query('SELECT * FROM users WHERE id = ?', [id]);
    return rows[0];
  }

  static async create(userData) {
    const { name, lastname, email, username, password } = userData;
    const [result] = await db.query(
      'INSERT INTO users (name, lastname, email, username, password) VALUES (?, ?, ?, ?, ?)',
      [name, lastname, email, username, password]
    );
    return { id: result.insertId, ...userData };
  }

  static async update(id, userData) {
    const { name, lastname, email, username, password } = userData;
    const [result] = await db.query(
      'UPDATE users SET name = ?, lastname = ?, email = ?, username = ?, password = ? WHERE id = ?',
      [name, lastname, email, username, password, id]
    );
    return result.affectedRows > 0;
  }

  static async delete(id) {
    const [result] = await db.query('DELETE FROM users WHERE id = ?', [id]);
    return result.affectedRows > 0;
  }
}

module.exports = User;