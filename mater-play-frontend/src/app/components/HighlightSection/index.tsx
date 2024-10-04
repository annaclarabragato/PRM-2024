import {Box, Container, Stack, Typography, Button}  from '@mui/material'



function HighlightSection(){
    return(
        <Box>
            <Container>
                <Stack
                direction="row"
                >
                    <img src="assets/house-of-dragons-poster.jpg" />
                    <Stack
                    
                    sx={{
                        justifyContent:'center',
                        paddingLeft:'3rem',
                    }}>
                        <Typography
                        variant="h4"
                        > A Casa do Dragão
                        </Typography>
                        <Typography
                        variant="subtitle2"
                        >
                            
                            <span
                            style={{
                                borderWidth: '1px',
                                borderStyle: 'solid',
                                padding: '0.2rem',
                                marginRight: '0.3rem',
                            }}>
                                16
                                </span>
                            Aventura, Fantasia, Ação
                        </Typography>
                        <Typography
                        variant="subtitle1"
                        sx={{
                            paddingTop: '2rem',
                            marginBottom:'0.5rem'
                        }}
                        >
                            Sinopse
                        </Typography>
                        <Typography
                        variant="body2">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet laudantium repudiandae veniam nam eius modi libero nemo consequatur, cum adipisci odit inventore dignissimos molestias eum consequuntur omnis ex voluptatum. Adipisci!
                        </Typography>
                        <Stack
                        direction="row"
                        gap={1}
                        sx={{
                            paddingY:'1rem'
                        }}
                        >
                            <Button 
                            variant="outlined"
                            >Assistir
                            </Button>
                            <Button
                            variant="outlined"
                            >Detalhes
                            </Button>
                        </Stack>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    )
}

export default HighlightSection;