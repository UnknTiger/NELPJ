const routes = [
  //--------------------------------VISITOR ROUTES---------------------------------
  {
    path: "/",
    name: "Template",
    component: () => import("../components/visitor/VisitorsTemplate.vue"),
    // component: () => import("../components/Template.vue"),
    meta: {
      visitorOnly: true,
      requiresAuth: false,
    },
    children: [
      {
        path: "/",
        name: "Homepage",
        component: () => import("../components/visitor/VisitorHomepage.vue"),
      },
      {
        path: "testimonials",
        name: "Testimonials",
        component: () =>
          import("../components/visitor/VisitorTestimonials.vue"),
      },
      {
        path: "prayers",
        name: "Prayers",
        component: () => import("../components/visitor/VisitorPrayers.vue"),
        // component: () =>
        //   import("../components/visitor/PrayerComponents/PrayerTemplate.vue"),
      },
      {
        path: "bePartOfUs",
        name: "Be part of us",
        component: () => import("../components/visitor/BePartOfUs.vue"),
      },
      {
        path: "aboutUs",
        name: "About us",
        component: () => import("../components/generals/AboutUs.vue"),
      },
      {
        path: "materials",
        name: "NELPJ Materials",
        // component: () => import("../components/visitor/VisitorMaterials.vue"),
        component: () => import("../components/generals/NELPJMaterials.vue"),
      },
      {
        path: "UserLogin",
        name: "Login",
        component: () => import("../components/visitor/UserLogin.vue"),
      },
    ],
  }, //End of Visitor routes

  //--------------------------------MEMBER ROUTES---------------------------------
  {
    path: "/member",
    name: "member home",
    component: () => import("../components/members/MemberTemplate.vue"),
    meta: {
      memberOnly: true,
      permission: "member",
      requiresAuth: true,
    },
    children: [
      {
        path: "/member",
        navMenu: "Profile",
        name: "MemberProfile",
        component: () => import("../components/members/MemberProfile.vue"),
      },
      {
        path: "events",
        navMenu: "Events",
        name: "MemberEvents",
        component: () => import("../components/members/MemberEvents.vue"),
      },
      {
        path: "activities",
        navMenu: "Activities",
        name: "MemberActivities",
        component: () => import("../components/members/MemberActivities.vue"),
      },
      {
        path: "aboutUs",
        navMenu: "AboutUs",
        name: "MemberAboutUs",
        component: () => import("../components/generals/AboutUs.vue"),
      },
      {
        path: "materials",
        navMenu: "Materials",
        name: "MemberMaterials",
        // component: () => import("../components/members/MemberMaterials.vue"),
        component: () => import("../components/generals/NELPJMaterials.vue"),
      },
      {
        path: "sponsorships",
        navMenu: "Sponsorships",
        name: "MemberSponsorships",
        component: () => import("../components/members/MemberSponsorships.vue"),
      },
      // {
      //   path: "messages",
      //   navMenu: "Messages",
      //   name: "MemberMessages",
      //   component: () => import("../components/members/MemberMessages.vue"),
      // },
    ],
  }, //End of member routes

  //--------------------------------ADMIN ROUTES---------------------------------
  {
    path: "/admin",
    name: "home",
    component: () => import("../components/admin/AdminTemplate.vue"),
    meta: {
      adminOnly: true,
      permission: "admin",
      requiresAuth: true,
    },
    children: [
      {
        path: "/admin",
        name: "Dashboard",
        component: () => import("../components/admin/AdminDashboard.vue"),
      },
      {
        path: "events",
        name: "Events",
        component: () => import("../components/admin/AdminEvents.vue"),
      },
      {
        path: "activities",
        name: "Activities",
        component: () => import("../components/admin/AdminActivities.vue"),
      },
      {
        path: "fndsInfo",
        name: "FoundationsInfo",
        component: () => import("../components/admin/FndsInfo.vue"),
      },
      {
        path: "materials",
        name: "Materials",
        component: () => import("../components/admin/AdminMaterials.vue"),
      },
      {
        path: "sponsorships",
        name: "Sponsorships",
        component: () => import("../components/admin/AdminSponsorships.vue"),
      },
      {
        path: "members",
        name: "Members",
        component: () => import("../components/admin/AdminMembers.vue"),
      },
    ],
  }, //End of admin routes
  //----------------------------LOGOUT-----------------------------------
  // {
  //   path: "/logout",
  //   name: "Logout",
  //   component: () => import("../components/visitor/VisitorHomepage.vue"),
  //   meta: {
  //   },
  //   children: [
  //     {
  //       path: "",
  //       name: "Profile",
  //       component: () => import("../components/members/MemberProfile.vue"),
  //     },
  //   }
  //Error 404
  {
    path: "/:catchAll(.*)*",
    component: () => import("../components/generals/ErrorNotFound.vue"),
  },
];

export default routes;
