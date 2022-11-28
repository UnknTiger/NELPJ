import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    name: "",
    // role: 0,
    role: 2,
    loginStatus: false,
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2,
  },
  actions: {
    // setUser(role, status) {
    //   this.role = role
    //   this.loginStatus = status
    // },
    setUser(data) {
      this.role = data.role;
      this.loginStatus = data.status;
      this.name = data.name;
    },
    logout() {
      this.role = 2;
      this.loginStatus = false;
    },
  },
});
