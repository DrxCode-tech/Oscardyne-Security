// api/contact.js
import { db } from "./firebaseAdmin.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, phone, email, message } = req.body;

    await db.collection("contact_requests").add({
      name,
      phone,
      email,
      message,
      createdAt: new Date()
    });

    return res.json({ success: true });
  } catch (err) {
    console.error("Firebase Error:", err);
    return res.status(500).json({ error: "Server error" });
  }
}
