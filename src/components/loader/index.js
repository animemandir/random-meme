import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import { css } from "@emotion/core";

const Loader = ({ loading }) => {
    const override = css`
        position: absolute;
        top: 50%;
        left: 50%;
    `;
    return (
        <ClipLoader
            color='gold'
            loading={loading}
            css={override}
            size={50}
        />
    )
};

export default Loader;