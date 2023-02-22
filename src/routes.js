const routes = [
    {
      name: "artistasList",
      path: "/",
      component: () => import("./pages/ArtistasList.vue"),
    },
    {
      name: "artista",
      path: "/artista/:id",
      component: () => import("./pages/Artista.vue"),
    },
    {
      name: "cancion",
      path: "/cancion/:id",
      component: () => import("./pages/Cancion.vue"),
    }
  ];
  
  export default routes;