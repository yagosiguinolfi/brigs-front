

function ProductCard() {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://s2.glbimg.com/0mnP1UnRjn1aC371SS-8IU9BSWM=/0x0:638x359/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2021/e/j/Kn1yDXQSeKr4GmAzDXQQ/receita-de-brigadeiro-tradicional.png"
          alt="green iguana"
        />
        <CardContent>
          <View>
            <Box bold>Brigadeiro</Box>
            <Box fontSize="16px">Saboroso brigadeiro feito com ingrdientes da melhor qualidade, com todo cuidado e higiene!</Box>
          </View>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default ProductCard;