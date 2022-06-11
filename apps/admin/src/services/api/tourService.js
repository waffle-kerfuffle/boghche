import { environment } from "../../environments/environment.prod"
import gate from "../gateway"

const controllerRoute = '/tour'

/**
 * @returns {any[]}
 */
export async function list() {
  return await (await gate.get(controllerRoute + '/list')).data;
}