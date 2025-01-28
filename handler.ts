import serverless from 'serverless-http';
import app from './src/app.js';

export const handler = serverless(app, {
	response: { 	
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': true,
        } }
})

export const hello = async () => {
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Hello, World!' })
    };
  };
