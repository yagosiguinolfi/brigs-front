import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import '@fontsource/ubuntu/300.css';
import '@fontsource/ubuntu/500.css';

function Home() {

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: 0, padding: 0, width: "100%" }}>
      <Box sx={{ fontFamily: 'Ubuntu', fontSize: 30, padding: '30px', display: 'flex', flexDirection:'column', alignItems: 'center' }}>
        Bem vindo(a) à Brig's!
        <Box sx={{ fontFamily: 'Ubuntu', fontWeight: 300, fontSize: 16}}>
          Lorem ipsum amet maecenas suspendisse tincidunt vulputate dui ullamcorper lacinia venenatis nulla, 
          per sed sem pharetra elit suscipit euismod aenean adipiscing mattis, etiam turpis sem eros quisque 
          hac fusce eleifend sapien morbi. amet at consequat facilisis erat potenti nibh conubia etiam, vitae 
          lectus odio fames vulputate vitae potenti.
        </Box>
      </Box>
      <Box sx={{ fontFamily: 'Ubuntu', fontSize: 30, padding: '30px', display: 'flex', flexDirection:'column', alignItems: 'center' }}>
        Conheça nossos produtos!
        <Box sx={{fontSize:16, fontWeight: 300}}>
          Teste de carrossel de produtos.
        </Box>
      </Box>
      <Box sx={{ fontFamily: 'Ubuntu', fontSize: 30, padding: '30px', display: 'flex', flexDirection:'column', alignItems: 'center' }}>
        Seja nosso cliente!
        <Box sx={{fontWeight: 300, fontSize: 16}}>
          Lorem ipsum amet maecenas suspendisse tincidunt vulputate dui ullamcorper lacinia venenatis nulla, 
          per sed sem pharetra elit suscipit euismod aenean adipiscing mattis, etiam turpis sem eros quisque 
          hac fusce eleifend sapien morbi. amet at consequat facilisis erat potenti nibh conubia etiam, vitae 
          lectus odio fames vulputate vitae potenti.
        </Box>
      </Box>
      <button>Usuários</button>
    </div>
  );
}

export default Home;
