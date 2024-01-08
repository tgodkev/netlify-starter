import fs from 'fs';
import path from 'path';

const postsDirectory = 'src/lib/posts';
function readJsonFile(filePath: string): object {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents);
}

function createResponse(data: object): Response {
    return new Response(JSON.stringify(data), {
        status: 200,
        headers: {'Content-Type': 'application/json'}
    });
}

export async function GET({request}) {
    const filenames = fs.readdirSync(postsDirectory);
    const posts = filenames.map(filename => readJsonFile(path.join(postsDirectory, filename)));
    return createResponse(posts);
}

export const prerender = true;