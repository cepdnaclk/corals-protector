import React from 'react';

const ChartsHeader = ({ category, title,Chart }) => (
    <div className=" mb-10">
        <div>
            <p className="text-lg text-gray-400">{Chart}</p>
        </div>
        <p className="text-center dark:text-gray-200 text-xl mb-2 mt-3">{title}</p>
    </div>
);

export default ChartsHeader;
