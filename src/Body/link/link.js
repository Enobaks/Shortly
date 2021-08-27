import React from 'react'
import './link.css';
import {CopyToClipboard} from 'react-copy-to-clipboard';

const Link = ({shortLink, originaLink, loading}) => {
    const copy = ()=>{

    }
    return (
        <div className='lnk-cont'>
            <div className="lnk-wrap">
               {loading && <p>loading....</p>}
               {!loading && <p className="org-l"> {originaLink}</p>}
                <hr />
                <div className='shrt-l-cont'>
                {loading && <p>loading....</p>}
                {!loading && <p className="shrt-l">{shortLink}</p>}
                    <CopyToClipboard text={shortLink}>
                        <button className='copy-btn' onClick={copy}>copy</button>
                    </CopyToClipboard>
                </div>
                
            </div>
        </div>
    )
}

export default Link
