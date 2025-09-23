const pool = require('../config/database');

const createTables = async () => {
  try {
    // Create users table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password_hash VARCHAR(255) NOT NULL,
        full_name VARCHAR(100),
        plan VARCHAR(20) DEFAULT 'basic',
        is_active BOOLEAN DEFAULT true,
        is_verified BOOLEAN DEFAULT false,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Create user_sessions table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS user_sessions (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
        token_hash VARCHAR(255) NOT NULL,
        expires_at TIMESTAMP NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Create ai_models table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS ai_models (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
        name VARCHAR(100) NOT NULL,
        description TEXT,
        model_size VARCHAR(20) NOT NULL,
        status VARCHAR(20) DEFAULT 'pending',
        accuracy DECIMAL(5,2),
        training_data_size INTEGER,
        epochs INTEGER,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Create training_logs table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS training_logs (
        id SERIAL PRIMARY KEY,
        model_id INTEGER REFERENCES ai_models(id) ON DELETE CASCADE,
        user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
        status VARCHAR(20) NOT NULL,
        start_time TIMESTAMP,
        end_time TIMESTAMP,
        accuracy DECIMAL(5,2),
        loss DECIMAL(10,6),
        error_message TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Create api_keys table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS api_keys (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
        key_name VARCHAR(100) NOT NULL,
        key_hash VARCHAR(255) NOT NULL,
        is_active BOOLEAN DEFAULT true,
        last_used TIMESTAMP,
        request_count INTEGER DEFAULT 0,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Create indexes for better performance
    await pool.query(`
      CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
    `);
    
    await pool.query(`
      CREATE INDEX IF NOT EXISTS idx_users_username ON users(username);
    `);
    
    await pool.query(`
      CREATE INDEX IF NOT EXISTS idx_ai_models_user_id ON ai_models(user_id);
    `);
    
    await pool.query(`
      CREATE INDEX IF NOT EXISTS idx_training_logs_model_id ON training_logs(model_id);
    `);
    
    await pool.query(`
      CREATE INDEX IF NOT EXISTS idx_api_keys_user_id ON api_keys(user_id);
    `);

    console.log('✅ Database tables created successfully');
  } catch (error) {
    console.error('❌ Error creating tables:', error);
  } finally {
    pool.end();
  }
};

createTables();
