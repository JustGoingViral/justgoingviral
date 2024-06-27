/*

  Just Going Viral © 2024
  Express Server (Middle Man API)
  
  -- Main Program --

    Author: Lancey Fem Denise Cruz
    lancey@justgoingviral.com

    This Express server provides a robust and flexible foundation for building web applications and APIs. 
    Leveraging the power of Node.js and the simplicity of Express, this server is designed to handle basic 
    routing for various HTTP methods, including GET, POST, PUT, and DELETE. It comes pre-configured with 
    essential middleware for logging requests, parsing JSON payloads, and managing Cross-Origin Resource 
    Sharing (CORS), ensuring smooth and secure data handling. The server also includes comprehensive error 
    handling mechanisms to gracefully manage unexpected issues and maintain stability.
    
    In addition to its core functionalities, the server is set up to serve static files, making it suitable 
    for hosting both dynamic and static content. With a clean and organized project structure, this Express 
    server is easy to extend and customize according to your specific requirements. Whether you're building 
    a simple API or a full-fledged web application, this server offers a reliable starting point, allowing 
    you to focus on developing features and delivering value to your users.

*/


const goHighLevelToken = ''; //gohighleveltoken
const nextechToken = ''; //nextechtoken

// Example of using different tokens
app.post('/gohighlevel', async (req, res) => {
  try {
    const response = await axios.post('https://gohighlevel.api.endpoint', req.body, {
      headers: {
        'Authorization': `Bearer ${goHighLevelToken}`,
        'Content-Type': 'application/json'
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/nextech', async (req, res) => {
  try {
    const response = await axios.post('https://nextech.api.endpoint', req.body, {
      headers: {
        'Authorization': `Bearer ${nextechToken}`,
        'Content-Type': 'application/json'
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
