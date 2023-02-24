import { CarrinhoProvider } from 'common/context/Carrinho';
import { UsuarioProvider } from 'common/context/Usuario';
import Carrinho from 'pages/Carrinho';
import Feira from 'pages/Feira';
import Login from 'pages/Login'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

function Routes() {

  return (
    <BrowserRouter>
      <Switch>
        <UsuarioProvider>
          <Route exact path="/" >
            <Login />
          </Route>
          <CarrinhoProvider>
            <Route path='/feira'>
              <Feira />
            </Route>
          </CarrinhoProvider>
        </UsuarioProvider>
        <Route>
          <Carrinho path='/carriho' />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;