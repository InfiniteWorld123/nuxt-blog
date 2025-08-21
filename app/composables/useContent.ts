export const useContent = () => {
  const route = useRoute();
  return useAsyncData(() =>
    queryCollection("content")
      .path(route.fullPath as string)
      .first()
  );
};
