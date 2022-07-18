export function paginate(items, pageNumber, pageSize) {
    // реализовать можно через обычные массивы и через lodash, сейчас реализуем через обычные массивы
    const startIndex = (pageNumber - 1) * pageSize;
    return [...items].splice(startIndex, pageSize);
}
