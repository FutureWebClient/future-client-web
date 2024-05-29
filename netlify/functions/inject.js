const jwt = require('jsonwebtoken');
const SECRET_KEY = 'your-secret-key'; // Replace with your own secret key

exports.handler = async function(event, context) {
  const token = event.headers.authorization.split(' ')[1];
  if (!token) {
    return {
      statusCode: 401,
      body: JSON.stringify({ message: 'Unauthorized' })
    };
  }

  try {
    jwt.verify(token, SECRET_KEY);
    const { script } = JSON.parse(event.body);

    // This is a placeholder for the actual injection logic
    // Implement the script injection securely
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Script injected successfully' })
    };
  } catch (error) {
    return {
      statusCode: 401,
      body: JSON.stringify({ message: 'Invalid token' })
    };
  }
};
