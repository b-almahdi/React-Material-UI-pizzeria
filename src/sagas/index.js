import { watchGetUsers, watchCancelUserUpdate, watchDeleteUser, watchEditUser, watchPostUser, watchPutUser } from './users';
import { watchGetProduits, watchCancelProduitUpdate, watchDeleteProduit, watchEditProduit, watchPostProduit, watchPutProduit } from './produits';

export default function* () {
  yield [
    watchGetUsers(),
    watchCancelUserUpdate(),
    watchDeleteUser(),
    watchEditUser(),
    watchPostUser(),
    watchPutUser(),
    watchGetProduits(),
    watchCancelProduitUpdate(),
    watchDeleteProduit(),
    watchEditProduit(),
    watchPostProduit(),
    watchPutProduit()
  ]
  console.log('root saga')
}