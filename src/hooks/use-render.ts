export const useRender = (
    applyFilters: () => void,
    renderList: () => void,
    renderPagination: () => void
): () => void => {
    return () => {
        applyFilters();
        renderList();
        renderPagination();
    };
};
