import React from 'react'
import { Link } from 'react-router-dom';
import Title from '../components/Head/Title';

const Home = () => {
    return (
        <div>
            <h3 className="text-center text-3xl text-base leading-8 text-black font-bold tracking-wide uppercase py-6">Home page</h3>
            <Link to="/catalogue"><h3 className="no-underline hover:underline text-center text-blue-500 text-2xl">Catalogue</h3></Link>
        </div>
    )
}

export default Home;
