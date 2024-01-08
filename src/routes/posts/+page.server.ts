export async function load({ fetch }) {
    try {
        const res = await fetch('/api/posts');
        if (!res.ok) {
            throw new Error(`Error loading posts: ${res.statusText}`);
        }
        const posts = await res.json();

        return {
            posts
        };
    } catch (error) {
        console.error(error);
        return {
            posts: []  // Handle the error as needed
        };
    }
}
