// /api/webhook.js

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.status(405).json({ message: 'Method Not Allowed' });
        return;
    }

    // Parse the incoming JSON data from NMKR
    const data = req.body;

    // Optional: Add some security check, like verifying a secret key in headers

    // Process the data (e.g., save it, log it, or trigger some action)
    console.log('Webhook received:', data);

    // You could save this data to a database or take other actions here

    // Send a response back to NMKR
    res.status(200).json({ status: 'success', message: 'Webhook processed' });
}
