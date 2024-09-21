import "server-only";
import { db } from "./db";

export const getImages = async () => {
    const data = await db.query.posts.findMany({
        orderBy: (model, {desc}) => desc(model.createdAt),
    });

    return data;
};