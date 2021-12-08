import styled from "styled-components";
import { Image } from "components/atoms";

export const StyledImage = styled(Image) `
height:65vh;
@media only screen and (max-width:767px) {
    height:50vh;
}
`
export const StyledGrid = styled.div `
display: grid;
grid-template-columns: repeat(auto-fill, 25%);
justify-content: center;
margin:2rem 0;
@media screen and (max-width: 768px){
    grid-template-columns: repeat(auto-fill,33%);
}
@media screen and (max-width: 425px){
    grid-template-columns: repeat(auto-fill,50%);
}
`
export const StyledWiderGrid = styled.div `
display: grid;
grid-template-columns: repeat(auto-fill, 50%);
@media screen and (max-width: 768px){
    grid-template-columns: repeat(auto-fill,100%);
    max-width:500px;
    margin:0 auto;
}
`