import {sql} from "@vercel/postgres";
export async function GET(request, {params}) {
    const posts = 
    await sql `select * from posts where ref_product = ${params.id}`;

    return Response.json(posts.rows.length > 0 ? posts.rows : null);
}