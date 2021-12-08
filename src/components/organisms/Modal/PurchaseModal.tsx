import { Button, H5, H3, Box } from "components/atoms"

export const PurchaseModal = () => {
    return (
        <Box
            paddingY="3rem"
            paddingX={{_:3,md:5}}>
            <H3
                textAlign="center"
                mb={4}>くじを購入します</H3>
                <Button 
                    fullwidth={true}
                    size="medium"
                    borderRadius={10}
                    bg="#f6c54e"
                    width="100%"
                    mb={3}
                >ログインして購入する</Button>
                <Button 
                    fullwidth={true}
                    size="medium"
                    borderRadius={10}
                    bg="gray.550"
                    mb={4}
                >ゲスト購入する</Button>
                <H5 
                    textAlign="center"
                    color="text.link"
                    fontWeight={500}
                    >新規登録はこちら</H5>
        </Box>
    )
}