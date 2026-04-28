import {useEffect, useState} from "react";

type QueryParams = {
    pageable?: {
        page: number;
        size: number;
    }
    sort?: {field: string; order: 'asc' | 'desc'}[];
    filters?: Record<string, unknown>
}

class QueryBuilder {
    private query: QueryParams = {};

    withPagination(pageable: NonNullable<QueryParams['pageable']>) {
        this.query.pageable = pageable;
        return this;
    }

    withSorting(sort: NonNullable<QueryParams['sort']>) {
        this.query.sort = sort;
        return this;
    }

    withFiltering(filters: NonNullable<QueryParams['filters']>) {
        this.query.filters = filters;
        return this;
    }

    build(){
        return this.query;
    }
}

function toQueryString(query: QueryParams) {
    const params = new URLSearchParams();

    if (query.pageable) {
        params.append('page', query.pageable.page.toString())
        params.append('size', query.pageable.size.toString())
    }

    if (query.sort && query.sort.length) {
        const sortString =
            query.sort.map(sortItem => `${sortItem.field},${sortItem.order}`).join(';');
        params.append('sort', sortString);
    }

    if (query.filters) {
        Object.entries(query.filters).forEach(([key, value]) => {
            params.append(key, Array.isArray(value) ? value.join(',') : String(value));
        })
    }

    return params.toString();
}

export const BuilderComponent = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const abortController = new AbortController();

        const query = new QueryBuilder()
            .withPagination({page: 0, size: 25})
            .withSorting([{field: 'id', order: 'asc'}, {field: 'name', order: 'desc'}])
            .withFiltering({
                createdAt: new Date().toISOString(),
            })
            .build()

        const url = `http://localhost:5173/api/todos?${toQueryString(query)}`;

        fetch(url, {signal: abortController.signal})
            .then(res => res.json())
            .then(data => setTodos(data))

        return () => {
            abortController.abort();
        }
    }, []);


    return <>{todos.map(() => <></>)}</>;
}