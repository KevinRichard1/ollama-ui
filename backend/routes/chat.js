const express = require('express');
const router = express.Router();
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

router.post('/', async (req, res) => {
  const { message } = req.body ;

  try {
    const response = await fetch('http://localhost:11434/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'llama3.1',
        messages: [{ role: 'user', content: `${message}  It is critical that you respond directly, in the fewest words possible, and in valid JSON format.` }],
        stream: true,
      }),
    });

    // Check if the response is not OK
    if (!response.ok) {
      console.error('Error: ', response.status, response.statusText);
      const errorDetails = await response.text();
      console.error('Error Details:', errorDetails);
      res.status(500).json({ error: 'Failed to connect to Ollama' });
      return;
    }

    // Check if response body is a stream or plain text
    const isStream = response.body && typeof response.body.getReader === 'function';
    
    if (isStream) {
      // Set headers for streaming response to client
      res.setHeader('Content-Type', 'text/event-stream');
      res.setHeader('Cache-Control', 'no-cache');
      res.setHeader('Connection', 'keep-alive');

      const decoder = new TextDecoder();
      const reader = response.body.getReader();
      let buffer = '';

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        // Accumulate the chunk data
        buffer += decoder.decode(value, { stream: true });

        // Split the accumulated buffer by newlines (JSON objects are separated by newlines)
        let boundary = buffer.indexOf('\n');
        while (boundary !== -1) {
          const chunk = buffer.slice(0, boundary).trim();
          buffer = buffer.slice(boundary + 1); // Remainder after the JSON object
          boundary = buffer.indexOf('\n');

          if (chunk) {
            try {
              const parsed = JSON.parse(chunk);
              const content = parsed.message?.content;
              if (content) {
                // Stream the content to the client
                res.write(`data: ${content}\n\n`);
              }
            } catch (error) {
              console.error('Error parsing JSON chunk:', error);
            }
          }
        }
      }

      // Signal the end of the stream
      res.write('data: [DONE]\n\n');
      res.end();
    } else {
      // If not a stream, assume it's a regular response
      const responseText = await response.text();
      const parsedResponse = JSON.parse(responseText);

      // Send the entire response back to the client
      res.json(parsedResponse);
    }
  } catch (error) {
    console.error('Error communicating with Ollama:', error.message || error);
    res.status(500).json({ error: 'Failed to fetch response from Ollama' });
  }
});

module.exports = router;