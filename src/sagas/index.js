import {
  watchGetUsers,
  watchCancelUserUpdate,
  watchDeleteUser,
  watchEditUser,
  watchPostUser,
  watchPutUser,
} from "./users";
import {
  watchGetProduits,
  watchGetProduitsParPrix,
  watchCancelProduitUpdate,
  watchDeleteProduit,
  watchEditProduit,
  watchPostProduit,
  watchPutProduit,
} from "./produits";
import {
  watchGetProduitById,
} from "./produit";

export default function* () {
  yield [
    watchGetUsers(),
    watchCancelUserUpdate(),
    watchDeleteUser(),
    watchEditUser(),
    watchPostUser(),
    watchPutUser(),
    watchGetProduits(),
    watchGetProduitById(),
    watchGetProduitsParPrix(),
    watchCancelProduitUpdate(),
    watchDeleteProduit(),
    watchEditProduit(),
    watchPostProduit(),
    watchPutProduit(),
  ];
  console.log("root saga");
}
