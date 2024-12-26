const winston = require("winston");
const { combine, timestamp, printf, colorize, json } = winston.format;

// log format
const logFormat = printf(({level, message, timestamp}) => {
    return `${timestamp} [${level}]: ${message}`;
});

//winston logger instance

// Create a Winston logger instance
const logger = winston.createLogger({
    level: "info", // Default logging level
    format: combine(
      timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
      logFormat
    ),
    transports: [
      // Write all logs (info, warn, error, etc.) to `application.log`
      new winston.transports.File({ filename: "logs/application.log" }),
  
      // Write only error logs to `error.log`
      new winston.transports.File({ filename: "logs/error.log", level: "error" }),
  
      // Log to the console for debugging during development
      new winston.transports.Console({
        format: combine(colorize(), logFormat),
      }),
    ],
  });
  
  module.exports = logger;
