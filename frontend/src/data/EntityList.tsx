import React from 'react';
import { prepareQuery } from '../../gqless';
import ErrorMessage from '../ui/ErrorMessage';

const EntityList = () => {
    const { data, isLoading, isRefetching, error } = usePrepared()

    return (
        <section>
            <h2>Entities</h2>

            <ul>
                {data?.map((e) => {
                    return (
                        <li key={e?.id}>
                            {e?.type}{e?.value ? `: ${e?.value}` : ''} - {'"'}{e?.id}{'"'}
                        </li>
                    )
                })}

                {(isLoading || isRefetching) ? 'Loading...' : ''}
            </ul>

            <ErrorMessage error={error} />
        </section>
    );
};

const { usePrepared, refetch, preload } = prepareQuery((query) => {
    return query.entityList({ first: 1000 })?.nodes?.map((x) => ({...x}))
})

preload()

export {
    refetch,
    usePrepared,
    preload,
}

export default EntityList;
