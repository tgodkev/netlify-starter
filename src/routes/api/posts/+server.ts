import fs from 'fs';
import path from 'path';

export async function GET(_request, _context) {
    const postsDirectory = 'src/lib/posts';
    const filenames = fs.readdirSync(postsDirectory);
    console.log(filenames)
    const posts = filenames.map(filename => {
        const filePath = path.join(postsDirectory, filename);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(fileContents);
    });

    return new Response(JSON.stringify(posts), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
    });
}
