module.exports = {
  apps: [
    {
      name: 'ts-insurance',
      script: 'server.js',
      instances: 1,
      exec_mode: 'cluster',
      autorestart: true,
      watch: ['server.js', 'app.config.js', 'helpers', 'controllers', 'models', 'app.js'],
      watch_delay: 1000,
      ignore_watch: ['node_modules', 'logs'],
      exp_backoff_restart_delay: 1000,
      max_memory_restart: '100M',
      log_file: './logs/app.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      time: true,
      combine_logs: true,
      env_development: {
        NODE_ENV:"development",
        API_VERSION:"v1",
        PORT:5003,
        APP_NAME:"retail_api",
        DB_CONNECTION:"postgres://user:pass@localhost:5432/db_dev"
      },
      env_production: {
        NODE_ENV:"production",
        API_VERSION:"v1",
        PORT:5003,
        APP_NAME:"retail_api",
        DB_CONNECTION:"postgres://user:pass@localhost:5432/db_prod"
      }
    }
  ]
};
