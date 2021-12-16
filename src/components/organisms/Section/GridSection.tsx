import { Container, Box, Typography } from "components/atoms";
import styled from "styled-components";

const StyledWiderGrid = styled.div `
display: grid;
grid-template-columns: repeat(auto-fill, 50%);
@media screen and (max-width: 768px){
    grid-template-columns: repeat(auto-fill,100%);
    max-width:500px;
    margin:0 auto;
}
`
type GridSectionProps = {
    title:string,
    subTitle:string,
    content:JSX.Element,
};

export const GridSection:React.FC<GridSectionProps> = ({title,subTitle,content}) => {
    return (
        <section>
            <Box 
                bg="gray.550"
                pt={{_:3,md:5}}
                pb={{_:4,md:5}}>
                <Container>
                    <Typography
                        as="h3"
                        fontSize={{_:"1.4rem",md:"1.9rem"}}
                        fontWeight="bold"
                        textAlign="center"
                        margin={0}>
                        {title}
                    </Typography>
                    <Typography
                        as="h3"
                        fontSize={{_:"1rem",md:"1.2rem"}}
                        fontWeight="bold"
                        textAlign="center"
                        color="primary.light"
                        margin={1}
                        mb={{_:2,md:4}}>
                        {subTitle}
                    </Typography>
                    <StyledWiderGrid>
                        {content}
                    </StyledWiderGrid>
                </Container>
            </Box>
        </section>
    )
    
}