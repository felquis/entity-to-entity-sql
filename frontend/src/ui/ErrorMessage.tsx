import { GQlessError } from 'gqless';
import React from 'react';

const ErrorMessage = ({ error }: { error?: GQlessError }) => {
    return error?.message ? (
        <div>
            <p>Something unexpected happened: {error.message}</p>
        </div>
    ) : null
};

export default ErrorMessage;