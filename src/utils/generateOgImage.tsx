import { type CollectionEntry } from "astro:content";
import postOgImage from "./og-template/post";

export async function generateOgImageForPost(post: CollectionEntry<"blogs">) {
  const svg = await postOgImage(post);
  return svg;
}
