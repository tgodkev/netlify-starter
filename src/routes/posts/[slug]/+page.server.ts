// src/routes/blog/[slug]/+page.server.ts
import { getItemById } from '$lib/utils';

export async function load({ params }) {
    const post = getItemById(params.slug, "posts");

    if (!post) {
        return {
            status: 404,
            error: new Error('Post not found')
        };
    }

    return {
        post
    };
}
