import express from "express";
import { getCustomers, addCustomer } from "../controller/customerController";

const router = express.Router();

router.get("/", getCustomers);
router.post("/", addCustomer);

export default router;
