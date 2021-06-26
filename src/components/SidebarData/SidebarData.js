import home from '../../images/home.svg';
import profile from '../../images/profile.svg';
import products from '../../images/products.svg';
import settings from '../../images/settings.svg';

export const SidebarData = [
  {
    title: "Home",
    icon: `${home}`
  },
  {
    title: "Profile",
    icon: `${profile}`,
    subNav: [
      {
        title: "Your profile"
      },
      {
        title: "Sign out"
      }
    ]
  },
  {
    title: "Products",
    icon: `${products}`,
    subNav: [
      {
        title: "Real state"
      },
      {
        title: "Stock market"
      }
    ]
  },
  {
    title: "Settings",
    icon: `${settings}`
  }
];