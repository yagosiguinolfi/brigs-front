import api from './api';
import { Produtos } from '../interfaces/Produtos';
import { Produtosede } from '../interfaces/Produtosede';

const getAllProdutos = () => api.get('/v1/Produtos')

//const createGrupoUsuarios = (grupoUsuarios: Pick<Grupos, 'nome' | 'listMenuGrupoUsuario'>) => api.post('/v1/Produtos-usuario', grupoUsuarios)

//const alteraGrupoUsuarios = (grupoUsuarios: GrupoUsuarios) => api.put(`/v1/Produtos-usuario/`, grupoUsuarios)

//const deleteGrupoUsuarios = (id: number) => api.delete(`/v1/Produtos-usuario/${id}`)

export const GetGrupo = {
    getAllProdutos,
    //createGrupoUsuarios,
    //alteraGrupoUsuarios,
    //deleteGrupoUsuarios,
}