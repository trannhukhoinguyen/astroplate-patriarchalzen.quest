// similar products
const similarItems = (currentItem: any, allItems: any[]) => {
  let tags: string[] = [];

  // set tags
  if (currentItem?.data?.tags?.length > 0) {
    tags = currentItem?.data?.tags;
  }

  // filter by tags
  const filterByTags = allItems.filter((item: any) =>
    tags.find((tag) => item?.data.tags.includes(tag)),
  );

  // merged after filter
  const mergedItems = [...new Set([...filterByTags])];

  // filter by slug
  const filterBySlug = mergedItems.filter(
    (product) => product.slug !== currentItem.slug,
  );

  return filterBySlug;
};

export default similarItems;
