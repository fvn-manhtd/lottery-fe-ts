import { favoriteApiNew } from "api";
import {
  Box,
  Button,
  FlexBox,
  Icon,
  Image,
  Spinner,
  Typography,
} from "components/atoms";
import { push } from "connected-react-router";
import { useEffect, useRef, useState } from "react";
import { useAppDispatch } from "redux/app/hooks";
import { currentUserDataActions } from "redux/features";
import styled from "styled-components";
import {
  lotteryStatusObj,
  getTheme,
  Route as ROUTES,
  formatTitle,
} from "utils";
import { LotteryProps } from "./Lottery";

export const LotteryFavorite: React.FC<LotteryProps> = ({
  id,
  src,
  title,
  status,
  shop_id,
  shop_domain,
}) => {
  const dispatch = useAppDispatch();
  const [isRemoving, setIsRemoving] = useState(false);

  const isScreenMounted = useRef(true);

  const handleRemoveFavorite = async () => {
    setIsRemoving(true);
    try {
      const { data } = await favoriteApiNew.remove({
        shop_id: shop_id,
        lottery_id: id,
      });
      if (!isScreenMounted.current) return;
      dispatch(
        push(`${ROUTES.USER_FAVORITE}?page=${data.data.pagination.last_page}`)
      );
      dispatch(currentUserDataActions.removeUserFav(data.data.data));
      setIsRemoving(false);
    } catch (error) {
      console.log("Error remove", error);
      setIsRemoving(false);
    }
  };

  useEffect(() => {
    return () => {
      isScreenMounted.current = false;
    };
  }, []);

  return (
    <Box bg="white" borderRadius="10px" shadow={4}>
      <a
        href={`${
          process.env.REACT_APP_MALL_SSL
        }${shop_domain}/lottery/${formatTitle(title)}/${id}`}
        target="_blank"
      >
        <Image
          width="100%"
          maxHeight={175}
          src={process.env.REACT_APP_MALL_IMAGE_PATH + src}
          alt={title}
          objectFit="cover"
        />
      </a>

      <Box padding={[1, 1, 2, 2]}>
        <Box>
          <StyledText
            width="auto"
            color="white"
            fontWeight={600}
            background={lotteryStatusObj[status - 1].color}
            fontSize={["0.6rem", "0.8rem", "0.875rem", "0.9375rem"]}
          >
            {lotteryStatusObj[status - 1].text}
          </StyledText>
        </Box>
        <Typography
          as="h1"
          fontSize={["0.9375rem", "0.9375rem", "1rem"]}
          wrap={true}
        >
          {title}
        </Typography>
        <StyledButton
          fullwidth
          borderRadius="5rem"
          size="small"
          border="1px solid"
          borderColor="gray.600"
          variant="outlined"
          type="button"
          onClick={handleRemoveFavorite}
          disabled={isRemoving}
        >
          {isRemoving && (
            <Spinner
              size={16}
              border="2px solid"
              borderColor="primary.light"
              borderTop="2px solid white"
            ></Spinner>
          )}
          {!isRemoving && (
            <FlexBox>
              <Icon size="1rem" px="0.5rem">
                close
              </Icon>
              <Typography>お気に入りから削除</Typography>
            </FlexBox>
          )}
        </StyledButton>
      </Box>
    </Box>
  );
};

const StyledButton = styled(Button)`
  &:hover {
    color: ${getTheme("colors.gray.white")};
    background-color: ${getTheme("colors.primary.main")};
    border-color: ${getTheme("colors.primary.main")};
    svg path {
      fill: ${getTheme("colors.gray.white")}!important;
    }
  }
`;
const StyledText = styled(Box)`
  display: inline-block;
  padding: 0.4rem 1rem;
`;
