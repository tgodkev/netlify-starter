import { getAll } from '$lib/utils';


export async function load() {
    try {
        const route = getAll('cms/about');
       return {
           route
       }
    } catch (error) {
        console.error('Error fetching posts:', error);
        return {
            props: { route: [] }  // Handle the error as needed
        };
    }
}
