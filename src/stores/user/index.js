const ecommerce_url = process.env.ECOMMERCE_URL;


export const createUserStore = (set, get) => ({
    user: {},

    updateUser: (userInfo) => {
        set({ user: userInfo });
        return userInfo
    },

    getUser: () => {
        const { user } = get()
        return user;
    },

    deleteUser: () => {
        set({ user: null });
        const { user } = get()
        return user
    },

    register: async (data) => {
        const response = await fetch(`${ecommerce_url}auth/register`, {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          const res = await response.json();
          return { status: "success", ...res };
        } else {
          return { status: "fail" };
        }
      }
});