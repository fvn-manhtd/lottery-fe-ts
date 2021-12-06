import styled from "styled-components";
import { Box } from "components/atoms";
import { Lottery } from "components/organisms";
import { Lottery as LotteryModel } from "models/lottery";

type LotteryListProps = {
    lotteries:LotteryModel[];
};

const StyledBox = styled.div `
display: grid;
grid-template-columns: repeat(auto-fill, 33%);
justify-content: center;
@media screen and (max-width: 768px){
    grid-template-columns: repeat(auto-fill,50%);
}
`

export const LotteryList: React.FC<LotteryListProps> = ({ lotteries }) => {
    return (
        <StyledBox>
            {lotteries.map((value) => {
                return (
                    <Box
                    key={value.id}
                    width={["95%","95%","92%","90%"]}
                    mb={[3,3,3,4]}
                    >
                    <Lottery
                        src={value.image}
                        title={value.title}
                        status={value.status}
                        period={value.startedAt}
                    />
                    </Box>
                );
            })}
        </StyledBox>
    )
}