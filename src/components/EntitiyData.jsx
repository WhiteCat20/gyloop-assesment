import React from 'react';

export const EntitiyData = ({ name }) => {
    return (
        <div className='ed-selection'>
            <div
                className='ed-wrapper'
                style={{
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '10px 10px',
                    gap: '11px',
                    fontSize: '14px',
                }}
            >
                <input type='checkbox' value='' id='flexCheckChecked' />
                <div style={{ fontWeight: 600 }}>{name}</div>
            </div>
        </div>
    );
};
