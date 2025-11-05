import fs from "fs";
import csv from "csv-parser";
import Cost from "../models/Cost.js";

export const parseCSV = async (filePath) => {
  return new Promise((resolve, reject) => {
    const rows = [];

    fs.createReadStream(filePath)
      .pipe(csv())
      .on("data", (row) => {
        rows.push({
          account: row["LinkedAccountId"] || row["AccountId"],
          service: row["ProductName"],
          region: row["Region"],
          amount: parseFloat(row["UnblendedCost"] || row["Cost"] || 0),
          date: new Date(row["UsageStartDate"] || row["Date"])
        });
      })
      .on("end", async () => {
        try {
          if (rows.length > 0) await Cost.insertMany(rows);
          resolve("CSV Imported");
        } catch (e) {
          reject(e);
        }
      })
      .on("error", reject);
  });
};