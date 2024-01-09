import { getAll } from '$lib/utils';

export async function load() {
    try {
        const posts = getAll('posts');
        return {
            posts
        }
    } catch (error) {
        console.error('Error fetching posts:', error);
        return {
            props: { posts: [] }  // Handle the error as needed
        };
    }
}
