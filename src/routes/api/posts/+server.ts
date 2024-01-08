import fs from 'fs';
import path from 'path';

export async function GET({request}) {
    const postsDirectory = 'src/lib/posts';
    const filenames = fs.readdirSync(postsDirectory);
    const posts = filenames.map(filename => {
        const filePath = path.join(postsDirectory, filename);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(fileContents);
    });
    console.log(posts)

    return new Response(JSON.stringify(posts), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
    });
}


export const prerender =  true;