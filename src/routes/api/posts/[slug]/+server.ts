import fs from 'fs';
import path from 'path';

const postsDirectory = 'src/lib/posts';

interface Post {
    title: string;
    excerpt: string;
    date: string;
    body: string;
    image_gallery: [];
    slug: string;

}


function readAllPosts(): Post[] {
    const filenames = fs.readdirSync(postsDirectory);
    return filenames.map(filename => {
        const filePath = path.join(postsDirectory, filename);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(fileContents);
    });
}

function findPostBySlug(posts: Post[], slug: string): Post | undefined {
    return posts.find(post => post.slug === slug);
}

export async function GET({params}): Promise<Response> {
    const posts = readAllPosts();
    const targetPost = findPostBySlug(posts, params.slug);

    return new Response(JSON.stringify(targetPost), {
        status: 200,
        headers: {'Content-Type': 'application/json'}
    });
}

export const prerender : boolean = false;
export const ssr = true;