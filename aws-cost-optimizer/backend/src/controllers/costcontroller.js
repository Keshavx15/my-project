import Cost from "../models/Cost.js";

export const getCosts = async (req, res) => {
  const data = await Cost.find().limit(50);
  res.json(data);
};