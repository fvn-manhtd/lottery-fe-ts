import { Box, Typography } from "components/atoms";
import { Card } from ".";
import styled from "styled-components";
import { variant } from "styled-system";

type PurchaseCardProps = {
    times:number;
    color:"blue"|"red" ;
}

export const Colors = {
    blue:{light:"#0068b7", thick:"#004980"},
    red:{light:"#ea5206", thick:"#bb4002"},
}

const StyledBoxLight = styled(Card) (
    variant({
        prop:"color",
        variants: {
            blue: {
                background:Colors.blue.light,
                boxShadow:"1px 8px 1px"+Colors.blue.thick,
            },
            red: {
                background:Colors.red.light,
                boxShadow:"1px 8px 1px"+Colors.red.thick,
            },
        }
    })
)
const StyledBoxThick = styled(Box) (
    variant({
        prop:"color",
        variants: {
            blue: {
                background:Colors.blue.thick,
            },
            red: {
                background:Colors.red.thick,
            },
        }
    })
)

export const PurchaseCard: React.FC<PurchaseCardProps> = ({ times, color }) => {
    return (
        <StyledBoxLight
        hoverEffect={true}
        color={color}
        cursor="pointer"
        borderRadius="20px"
        paddingY={{_:10,md:20}}
        paddingX={30}
        width={{_:"unset",md:"95%"}}
            >
            <Typography 
                textAlign="center"
                as="h4"
                color="white"
                fontSize={{_:"1rem",md:"1.5rem"}}
                margin={0}
                mb={2}
                >
                <Typography 
                    as="span" 
                    color="#ffff00" 
                    fontSize={{_:"1.5rem",md:"2.3rem"}}>
                    <Typography as="span" fontSize={{_:"1.5rem",md:"2.4rem"}}>{times}</Typography>
                    回くじ
                </Typography>
                を購入する
            </Typography>
            <StyledBoxThick 
                color={color}
                borderRadius={35}
                paddingY={2}
                textAlign="center"
                >
                <Typography 
                    margin={0}
                    color="white"
                    as="h4"
                    fontSize={{_:"1.2rem",md:"1.6rem"}}>
                    500円/1回
                </Typography>
            </StyledBoxThick>
        </StyledBoxLight>
    )
}