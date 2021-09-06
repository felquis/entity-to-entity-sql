import React from 'react';
import { useQuery } from '../gqless';

const EntityList = () => {
    const query = useQuery()

    const list = query.entityList({ first: 1000 })

    return (
        <div>
            Entities

            <ul>
                {list?.nodes?.map((e) => {
                    return (
                        <div key={e?.id}>
                            {e?.type}={e?.value}
                        </div>
                    )
                })}
            </ul>
        </div>
    );
};

export default EntityList;
