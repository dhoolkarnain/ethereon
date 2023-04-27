import React from 'react'
import ExploreSection from './Components/ExploreSection';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import MarketingSection from './Components/Marketing';
import MoreBlog from './Components/MoreBlog';
import SubscribeSection from './Components/SubscribeSection';
import { useEffect, useState } from 'react';

const Body = () =>
{
    const [ blogs, setBlogs ] = useState( null )

    useEffect( () =>
    {
        const fetchBlogs = async () =>
        {
            const response = await fetch( '/blogs' )
            const json = await response.json()

            if ( response.ok )
            {
                setBlogs( json )
            }
        }
        fetchBlogs()
    }, [ blogs ] )
    console.log( blogs )

    return (
        <div>
            <Header />
            {
                blogs && blogs.map( ( blog ) => (
                    <Home blog={blog} />
                ) )
            }

            <MoreBlog />
            <MarketingSection />
            <ExploreSection />
            <SubscribeSection />
            <Footer />
        </div>
    )
}

export default Body
