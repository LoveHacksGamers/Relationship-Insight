import type {LayoutServerLoad} from './$types';
import {loadFlash} from "sveltekit-flash-message/server";

export const load = loadFlash(async ({locals : {getSession}}) => {
  return {user_id : (await getSession())}
}) satisfies LayoutServerLoad;