// index.js using CommonJS syntax
exports.handler = async function(event, context) {
    // Logging input for debugging purposes
    console.log("Event:", JSON.stringify(event));
    console.log("Context:", JSON.stringify(context));

    // Simulate processing and return a success message
    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Function executed successfully!" }),
        headers: { 'Content-Type': 'application/json' }
    };
};
