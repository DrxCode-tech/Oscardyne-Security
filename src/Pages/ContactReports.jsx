"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import dayjs from "dayjs";

export default function ContactReports() {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadReports() {
      try {
        const res = await fetch("/api/getContactReports");
        const data = await res.json();
        setReports(data.reports || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadReports();
  }, []);

  return (
    <div className="text-white">
      <h1 className="text-4xl font-extrabold mb-6 
        bg-gradient-to-r from-yellow-400 to-red-400 text-transparent bg-clip-text">
        Contact Reports
      </h1>

      {loading && <p className="text-gray-400">Loading...</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reports.map((r) => (
          <motion.div
            key={r.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/10 border border-white/20 p-6 rounded-xl backdrop-blur-md shadow-lg"
          >
            <h2 className="text-xl font-bold mb-2">{r.name}</h2>
            <p className="text-blue-300">{r.email}</p>
            <p className="text-gray-300 mb-3">{r.phone}</p>

            <p className="text-gray-200">{r.message}</p>

            <p className="text-xs text-gray-500 mt-4">
              Sent: {r.createdAt
                ? dayjs(
                    r.createdAt._seconds
                      ? new Date(r.createdAt._seconds * 1000)
                      : new Date(r.createdAt)
                  ).fromNow()
                : "Unknown"}
            </p>
          </motion.div>
        ))}
      </div>

      {!loading && reports.length === 0 && (
        <p className="text-center text-gray-400 mt-10">No reports yet.</p>
      )}
    </div>
  );
}
