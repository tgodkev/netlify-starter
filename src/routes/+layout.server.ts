export const prerender = true;
export const ssr = true;
export const csr = true;



  
import { getAll } from '$lib/utils';

export async function load() {
    try {
        const menu = getAll('cms/navigation.json');

       console.log(menu, "this is the menu object");
       return {
           menu
       }
    } catch (error) {
        console.error('Error fetching posts:', error);
        return {
            props: { menu: [] }  // Handle the error as needed
        };
    }
}
