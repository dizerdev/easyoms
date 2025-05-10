const data = {
  headerMenus: [
    {
      name: "Ofertas Hoje",
      href: "/search?tag=todays-deal",
    },
    {
      name: "Lançamentos",
      href: "/search?tag=new-arrival",
    },
    {
      name: "Por Categoria",
      href: "/search?tag=featured",
    },
    {
      name: "Mais Vendidos",
      href: "/search?tag=best-seller",
    },
    {
      name: "Nossa História",
      href: "/#browsing-history",
    },
    {
      name: "Serviços",
      href: "/page/customer-service",
    },
    {
      name: "Sobre",
      href: "/page/about-us",
    },
    {
      name: "Contato",
      href: "/page/help",
    },
  ],
  carousels: [
    {
      title: "Roupas para qualquer exercicio",
      buttonCaption: "Lançamentos",
      image: "/images/banner1.jpg",
      url: "/search?category=Shoes",
      isPublished: true,
    },
    {
      title: "Roupas que se ajustam a você",
      buttonCaption: "Veja ofertas",
      image: "/images/banner2.jpg",
      url: "/search?category=T-Shirts",
      isPublished: true,
    },
    {
      title: "Vestuario para crianças",
      buttonCaption: "Compre agora",
      image: "/images/banner3.jpg",
      url: "/search?category=Wrist Watches",
      isPublished: true,
    },
  ],
};

export default data;
