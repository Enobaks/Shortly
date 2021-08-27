import React from 'react'
import './body.css'
// import logo from "../images/bg-boost-desktop.svg";
import hero_image from "../images/illustration-working.svg";
import brand_recognition from "../images/icon-brand-recognition.svg";
import detailed_records from "../images/icon-detailed-records.svg";
import fully_customizable from "../images/icon-fully-customizable.svg";
import Link from './link/link';
import { useState } from 'react';
import { useEffect } from 'react';



const Body = () => {
    const [url, setUrl] = useState('');
    const [shortUrl, setShortUrl] = useState(null)
    const [loading, setLoading] = useState(false)
    const linkArray = []
    
    const handleSubmit = async(e)=>{
        e.preventDefault();
        const baseUrl = "https://api.shrtco.de/v2/shorten?url="
        const mainUrl = baseUrl+url
        setLoading(true)
        const response = await fetch(mainUrl)
        const data = await response.json()
        const {result} = data
        setShortUrl(result)
        setLoading(false)
        setUrl('')
    }
    useEffect(()=>{ 
        if(shortUrl){
            const {short_link, original_link} = shortUrl
            linkArray.push({short_link, original_link})
        }

    }, [shortUrl, linkArray])
    useEffect(()=>{
        // console.log(shortUrl)
        console.log(linkArray)
    }, [ linkArray])

    return (
        <section className='main-cont'>
            <div className="hero-section">
                <div className="hero-txt">
                    <h1>More than just <br />shorter links</h1>
                    <p>Build your brand's recognition and get detailed insights on how your links are performing</p>
                    <div className="butn-wrap">
                        <button className='butn'>Get Started</button>
                    </div>        
                </div>
                <div className="hero-image">
                    <img src={hero_image} alt="" />
                </div>
            </div>
            <div className="link-section">
                <div className="link-input">
                    <div className="filter"></div>
                    <form onSubmit={handleSubmit}>
                        <input type="text" onChange={(e)=>{setUrl(e.target.value)}} required placeholder="Shorten a link here..."/>
                        <button type='submit'>Shorten It!</button>
                    </form>
                    
                </div>
                {shortUrl && <Link loading = {loading} shortLink={shortUrl ? shortUrl.short_link : ''} originaLink={shortUrl ? shortUrl.original_link : ''}/>}
                
                <div className="statistics">
                    <h2>Advanced Statistics</h2>
                    <p>Track how your links are performing across the web with <br /> our advanced statistics dashboard</p>
                    <div className="statistics-cards">
                        <div className="card">
                            <div className="img">
                                <img src={brand_recognition} alt="" width="40px" />
                            </div>
                            <div className="card-txt">
                                <h3>Brand Recognition</h3>
                                <p>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help to instill confidence in your content.</p>
                            </div>
                            
                        </div>
                        <div className="blue-bar first"></div>
                        <div className="card d2">
                            <div className="img">
                                <img src={detailed_records} alt="" />
                            </div>
                            <div className="card-txt">
                                <h3>Detailed Records</h3>
                                <p>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions. </p>
                            </div>
                        </div>
                        <div className="blue-bar second"></div>
                        <div className="card d3">
                            <div className="img">
                                <img src={fully_customizable} alt="" />
                            </div>
                            <div className="card-txt">
                                <h3>Fully Customizable</h3>
                                <p className="customize">Improve brand awareness and content discoverability through customizable links, supercharging audience engagement </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="boost">
                <div className="wrap">
                    <h2>Boost your links today</h2>
                    <button className='butn'>Get Started</button>
                </div>    
            </div>
           
        </section>
    )
}
export default Body
