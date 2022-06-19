/*
    data = [
        {name, scope: { amount }}
    ]

    sort(data, 'name', false);
    sort(data, 'scope.amount', true);
*/

export const sort = (data, field, desc = false) => {
    if(Array.isArray(field)) {
        return data.slice().sort((a, b) => {
            let stringA = '';
            let stringB = '';

            for(let f of field) {
                stringA += ` ${a[f]}`;
                stringB += ` ${b[f]}`;
            }

            return desc ? -stringA.localeCompare(stringB, ['en', 'ru']) : stringA.localeCompare(stringB, ['en', 'ru']);
        });
    }

    const [scope, value] = field.split('.');

    return data.slice().sort((a, b) => {

        if(a[scope] === null || b[scope] === null) {
            // @ts-ignore
            return desc ? (a[scope] === null) - (b[scope] === null) : (b[scope] === null) - (a[scope] === null);
        }

        if(typeof a[scope] === 'object') {

            if(typeof a[scope][value] === 'number')
                return !desc ? a[scope][value] > b[scope][value] ? 1 : -1 : a[scope][value] < b[scope][value] ? 1 : -1;

            return desc ? -a[scope][value].localeCompare(b[scope][value], ['en', 'ru']) : a[scope][value].localeCompare(b[scope][value], ['en', 'ru']);
        }

        if(typeof a[field] === 'number')
            return !desc ? a[field] > b[field] ? 1 : -1 : a[field] < b[field] ? 1 : -1;

        return desc ? -a[field].localeCompare(b[field], ['en', 'ru']) : a[field].localeCompare(b[field], ['en', 'ru']);
    });
};
