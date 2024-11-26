import { MedusaRequest, MedusaResponse } from "@medusajs/framework";

export async function GET(req: MedusaRequest, res: MedusaResponse): Promise<void> {
  res.appendHeader("Access-Control-Allow-Origin", "*");
  res.sendStatus(200);
}
