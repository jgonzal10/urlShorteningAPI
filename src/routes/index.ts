import { Router } from "express";
import { encodeURL } from "../controllers/encodeURL.controller";
import { decodeURL } from "../controllers/decodeURL.controller";
const router = Router();

router.post("/encode", encodeURL);
router.get("/decode", decodeURL);

export default router;
