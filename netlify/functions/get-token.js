exports.handler = async function(event, context) {
  // CORS headers
  const headers = {
    "Access-Control-Allow-Origin": "http://127.0.0.1:5501", // adjust as needed
    "Access-Control-Allow-Headers": "Content-Type",
  };

  // Handle preflight OPTIONS request
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers,
      body: "",
    };
  }

  const token = process.env.BLIZZ_ACCESS_TOKEN;
  if (!token) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: "No token found in environment variables" }),
    };
  }

  return {
    statusCode: 200,
    headers,
    body: JSON.stringify({ token }),
  };
};