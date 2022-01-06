import styled from "styled-components";
import { Box } from "components/atoms";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { LotteryListStyledBox } from "components/organisms";


export const LotterySkeletonCard: React.FC = () => {
    return (
        <LotteryListStyledBox>
            {(() => {
                const items = [];
                for (let i = 0; i < 9; i++) {
                    items.push(
                        <Box
                            key={i}
                            width={["95%","95%","92%","90%"]}
                            mb={[3,3,3,4]}
                            height={{_:"200px",md:"280px"}}
                            >
                            <Skeleton height="100%"/>
                        </Box>)
                }
                return <>{items}</>;
            })()}
        </LotteryListStyledBox>
    )
}