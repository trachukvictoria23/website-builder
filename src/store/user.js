//import { bus } from "@/main";
import router from "@/router";
import { db } from "@/main";
import { uuid } from "vue-uuid";

export default {
	state: {
		user_info: null,
		user_projects: {},
		active_project_id: null
	},
	getters: {
		getUserInfo(state) {
			return state.user_info;
		},
		getUserId(state) {
			if (state.user_info) return state.user_info.id;
			return null;
		},
		getUserProjects(state) {
			return state.user_projects;
		},
		getActiveProjectId(state) {
			return state.active_project_id;
		}
	},
	mutations: {
		setUserInfo(state, payload) {
			state.user_info = payload;
		},
		setUserProjects(state, payload) {
			state.user_projects = payload;
		},
		setActiveProjectId(state, payload) {
			state.active_project_id = payload;
		}
	},
	actions: {
		reloadRouter({}) {
			setTimeout(() => {
				const active_router = router.currentRoute.name;
				if (active_router !== "Registration" && active_router !== "Login")
					return router.push({ name: "Login" });
			}, 500);
		},
		updateUserInfo({ commit, dispatch }) {
			let email = localStorage.getItem("email");
			if (!email) return dispatch("reloadRouter");
			const docRef = db.collection("users").doc(email);
			docRef
				.get()
				.then(doc => {
					const user = doc.data();
					if (!user) dispatch("reloadRouter");
					delete user.password;

					commit("setUserInfo", user);
					dispatch("setUserProjects");
				})
				.catch(error => {
					dispatch("reloadRouter");
				});
		},
		setUserProjects({ commit, getters }) {
			const user_id = getters.getUserId;
			if (!user_id) return;
			const docRef = db.collection("projects").doc(user_id);
			const projects = [];
			docRef
				.get()
				.then(doc => {
					const projects = doc.data();
					if (!projects) return commit("setUserProjects", {});
					commit("setUserProjects", projects);
				})
				.catch(error => {
					console.log("error get", error);
				});
		},
		setUserInfo({ commit, dispatch }, payload) {
			const docRef = db.collection("users").doc(payload.email);
			docRef
				.get()
				.then(doc => {
					const user = doc.data();
					if (!user) return alert("User not found!");

					if (user.password !== payload.password)
						return alert("Wrong password");
					delete user.password;
					localStorage.setItem("email", payload.email);
					commit("setUserInfo", user);
					dispatch("updateUserInfo");
					router.push({ name: "Home" });
				})
				.catch(error => {
					console.log("error get", error);
				});
		},
		logout({ commit }) {
			localStorage.removeItem("email");
			commit("setUserInfo", null);
			router.push({ name: "Login" });
		},
		saveUserProject({ getters }) {
			const content = getters.getDraftContent;
			const exist_projects = getters.getUserProjects;
			const id = getters.getActiveProjectId
				? getters.getActiveProjectId
				: uuid.v4();
			exist_projects[id] = {
				name: "one",
				content
			};
			const ProjectService = db.collection("projects");
			ProjectService.doc(getters.getUserId)
				.set(exist_projects)
				.then(res => {})
				.catch(error => {
					alert("Error save project: ", error);
				});
		},
		deleteUserProject({}) {}
	}
};
