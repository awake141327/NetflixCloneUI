import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { BiPlay } from 'react-icons/bi'
import { GoPlus } from 'react-icons/go'

const apiKey = "e470fbb33cc3896ae1cdf61b5ee3fb89";
const baseUrl = "https://api.themoviedb.org/3";
const posterUrl = "https://image.tmdb.org/t/p/w500"
const backdropUrl = "https://image.tmdb.org/t/p/original"

const Card = ({img}) => (
    <img src={img} alt="cover" />
) 

const Row = ({title, arr = []}) => (
    <div className="row">
        <h2>{title}</h2>
        <div>
            {arr.map((item, index) => (
                <Card key={index} img={`${posterUrl}/${item.poster_path}`} />
            ))}
        </div>
    </div>
)

export default function Home() { 

    const [upcomingMovies, setUpcomingMovies] = useState([])
    const [popularMovies, setPopularMovies] = useState([])
    const [topRatedMovies, setTopRatedMovies] = useState([])
    const [popularTVShows, setPopularTVShows] = useState([])
    const [topRatedTVShows, setTopRatedTVShows] = useState([])

    useEffect(() => {
        // Upcoming Movies
        const fetchUpcomingMovies = async () => {
            const { data } = await axios.get(`${baseUrl}/movie/upcoming?api_key=${apiKey}`)
            setUpcomingMovies(data.results)
        }
        fetchUpcomingMovies()

        // Popular Movies
        const fetchPopularMovies = async () => {
            const { data } = await axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}`)
            setPopularMovies(data.results)
        }
        fetchPopularMovies()

        // Top Rated Movies
        const fetchTopRatedMovies = async () => {
            const { data } = await axios.get(`${baseUrl}/movie/top_rated?api_key=${apiKey}`)
            setTopRatedMovies(data.results)
        }
        fetchTopRatedMovies()

        // Popular TV Shows
        const fetchPopularTVShows = async () => {
            const { data } = await axios.get(`${baseUrl}/tv/popular?api_key=${apiKey}`)
            setPopularTVShows(data.results)
        }
        fetchPopularTVShows()

        // Top Rated TV Shows
        const fetchTopRatedTVShows = async () => {
            const { data } = await axios.get(`${baseUrl}/tv/top_rated?api_key=${apiKey}`)
            setTopRatedTVShows(data.results)
        }
        fetchTopRatedTVShows()
    }, [])

    return (
        <section className="home">
            <div className="banner" style={{backgroundImage: popularMovies[0]? `url(${backdropUrl}${popularMovies[0].backdrop_path})` : 'none'}}>
                {popularMovies[0] && <h1>{popularMovies[0].original_title}</h1>}
                {popularMovies[0] && <p>{popularMovies[0].overview}</p>}
                <div>
                    <button><BiPlay /> Play</button>
                    <button>My List  <GoPlus /></button>
                </div>
            </div>

            <Row title="Popular Movies" arr={popularMovies}/>
            <Row title="Upcoming Movies" arr={upcomingMovies}/>
            <Row title="Top Rated Movies" arr={topRatedMovies}/>
            <Row title="Popular TV Shows" arr={popularTVShows}/>
            <Row title="Top Rated TV Shows" arr={topRatedTVShows}/> 
            

        </section>
    )
}
