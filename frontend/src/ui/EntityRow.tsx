import React from 'react';
import { Entity } from '../../gqless';

const EntityRow = ({ entity }: { entity?: Entity }) => {
    return (
        <>
            {entity?.type}{entity?.value ? `: ${entity?.value}` : ''} - {'"'}{entity?.id}{'"'}
        </>
    );
};

export default EntityRow;
