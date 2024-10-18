import {Box, Container, Stack, Typography}  from '@mui/material'
import MovieCard from "../MovieCard";
import { useEffect, useState } from 'react';
import { IMovie } from '../../@libs/types';
import { MoviesService } from '../../services/movies-service';



type SectionProps = {
    title: string;
}

function Section({
    title
}: SectionProps) {
    
    const[movies, setMovies] = useState<IMovie[]>([]);

    useEffect(() =>{

        MoviesService.getMovies()
        .then(result => {
            setMovies(result)
        });
//executa o que está aqui dentro quando carrega o componente.
    }, []);
    
    
    return(
        <Box>
            <Container>
                <Typography
                variant ="h6"
                sx={{
                    fontWeight: 400,
                    paddingTop: '2rem'
                }}>
                    

                    { title } 
                </Typography>
                <Stack
                direction="row"
                gap={0.5}
                sx={{
                    overflowY: 'hidden',
                    whiteSpace: 'nowrap',
                    paddingY: '1rem'
                }}
                >
                    {movies.map(item => (
                        <MovieCard key={item.id} poster={'assets/'+ item.poster}/>
                    ))}

                </Stack>
            </Container>
        </Box>
    )
}

export default Section;