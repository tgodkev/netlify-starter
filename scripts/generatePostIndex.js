import fs from 'fs';
import path from 'path';

const postsDirectory = 'src/lib/posts';
const indexFile = 'src/lib/postsIndex.json';

const filenames = fs.readdirSync(postsDirectory);
const index = {};

for (const filename of filenames) {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf-8');
    const post = JSON.parse(fileContents);
    index[post.slug] = filename;
}

fs.writeFileSync(indexFile, JSON.stringify(index, null, 2));
