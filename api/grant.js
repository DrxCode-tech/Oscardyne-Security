import mailjet from "node-mailjet";

export default async function handler(req, res) {
    if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

    const { email, name, date } = req.body;

    if (!email || !name || !date)
        return res.status(400).json({ error: "Missing fields" });

    try {
        const mj = mailjet.apiConnect(process.env.MJ_API_KEY, process.env.MJ_SECRET);

        await mj.post("send", { version: "v3.1" }).request({
            Messages: [
                {
                    From: { Email: process.env.MJ_SENDER },
                    To: [{ Email: email }],
                    Subject: "Your Application Has Been Granted",
                    TextPart: `Hello ${name}, your application has been granted. Your appointment date is ${date}.`,
                },
            ],
        });

        return res.json({ success: true });

    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
}
