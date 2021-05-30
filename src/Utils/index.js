export const createRows = (posts) =>
        posts.map(({ id, title, author, status, last_updated }) =>
            ({ id, title, author, status, last_updated: `${new Date(last_updated).toDateString()}` }));