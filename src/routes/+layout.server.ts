import { getAll } from '$lib/utils';
export const prerender = true;
export const ssr = true;
export const csr = true;


export async function load() {
    try {
        const menu = getAll('cms/settings');

       return {
           menu
       }
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
}
