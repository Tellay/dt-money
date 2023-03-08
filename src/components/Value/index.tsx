import React from 'react';

interface Props {
    value: number;
}

const Value: React.FC<Props> = ({ value }) => {

    const formatNumber = (value: number) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(value);
    }

    return (
        <div>
            {value < 0 
                ? <span>- {formatNumber(value * -1)}</span> : 
                <span>{formatNumber(value)}</span>
            }
        </div>
    );
}

export default Value;