import React from 'react';
import { EntityConnection, useQuery } from '../../gqless';
import EntityRow from '../ui/EntityRow';

const EntityEntities = ({ id }: { id: string; }) => {
    const query = useQuery()

    const list = query.entityList({ first: 100, entityId: id })

    return (
        <ul>
            <EntityEntitiesList list={list} />
        </ul>
    );
};

const EntityEntitiesList = ({ list }: { list?: EntityConnection | null }) => {
    return (
        <>
            {list?.nodes?.map((e) => {
                return (
                    <li key={e?.id}>
                        <EntityRow entity={{...e, __typename: undefined}} />

                        {e?.id ? <EntityEntities id={e?.id} /> : null}
                    </li>
                )
            })}
        </>
    )
}

export default EntityEntities;