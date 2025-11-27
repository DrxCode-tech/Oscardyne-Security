import { db } from "./firebaseAdmin.js";

export default async function handler(req, res) {
  try {
    const snap = await db.collection("contact_requests").orderBy("createdAt", "desc").get();

    const reports = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    return res.json({ reports });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Unable to fetch reports" });
  }
}
