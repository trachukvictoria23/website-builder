export default {
	state: {
		draft_content: null,
		active_draft_id: null,
		active_draft_type: null,
		elements_draft: []
	},
	getters: {
		getActiveDraftId(state) {
			return state.active_draft_id;
		},
		getActiveDraftType(state) {
			return state.active_draft_type;
		},
		getDraftContent(state) {
			return state.draft_content;
		}
	},
	mutations: {
		setActiveDraftId(state, id) {
			state.active_draft_id = id;
		},
		setActiveDraftType(state, payload) {
			state.active_draft_type = payload;
		},
		clearDraftContent(state) {
			state.draft_content = null;
		}
	},
	actions: {
		saveDraftContent({ state, dispatch }, payload) {
			state.draft_content = payload
				? payload
				: document.getElementById("main").innerHTML;

			console.log("save", state.draft_content);

			if (state.draft_content) dispatch("saveUserProject");
		},
		setActiveEvents({ dispatch }) {
			const main = document.getElementById("main");
			let active_elements_id = [];
			let children = main.childNodes;
			children.forEach(child => {
				active_elements_id.push(child.id);
				document
					.getElementById(child.id)
					.addEventListener("click", function(e) {
						e.stopPropagation();
						dispatch("setActiveElement", e.target);
					});
				child.childNodes.forEach(el => {
					active_elements_id.push(el.id);
					document.getElementById(el.id).addEventListener("click", function(e) {
						e.stopPropagation();
						dispatch("setActiveElement", e.target);
					});
				});
			});
		},
		addNewBlock({ state, commit, dispatch }) {
			const main = document.getElementById("main");
			const new_el = document.createElement("div");
			const new_id = Math.random()
				.toString(36)
				.substr(2, 9);
			const default_styles =
				"width: 100%; height: 512px; border-bottom: 1px solid";
			new_el.setAttribute("id", new_id);
			new_el.setAttribute("style", default_styles);
			new_el.addEventListener("click", function(e) {
				e.stopPropagation();
				dispatch("setActiveElement", e.target);
			});
			main.appendChild(new_el);
			dispatch("saveDraftContent");
		},
		addNewTextElement({ state, dispatch }, tagName) {
			const active_block = document.getElementById(state.active_draft_id);
			const innerText = tagName === "h1" ? "Heading" : "New info text";
			const new_el = document.createElement(tagName);
			const new_id = Math.random()
				.toString(36)
				.substr(2, 9);
			new_el.setAttribute("id", new_id);
			new_el.innerHTML = innerText;
			new_el.style.textAlign = "left";
			new_el.addEventListener("click", function(e) {
				e.stopPropagation();
				return dispatch("setActiveElement", e.target);
			});
			active_block.appendChild(new_el);
			dispatch("saveDraftContent");
		},
		setActiveElement({ commit }, target) {
			let tag = target.tagName.toLocaleLowerCase();
			let target_block_type = null;
			if (tag === "div") target_block_type = "block";
			if (tag === "h1" || tag === "p") target_block_type = "text";
			commit("setActiveDraftId", target.id);
			commit("setActiveDraftType", target_block_type);
		},
		setActiveElementOption({ state, dispatch }, payload) {
			console.log("option", payload);
			const active_el = document.getElementById(state.active_draft_id);
			active_el.style[payload.name] = payload.val;
			dispatch("saveDraftContent");
		},
		setActiveElementVal({ state, dispatch }, payload) {
			const active_el = document.getElementById(state.active_draft_id);
			active_el.innerHTML = payload;
			dispatch("saveDraftContent");
		},
		removeElement({ state, commit, dispatch }) {
			const active_el = document.getElementById(state.active_draft_id);
			if (!active_el) return;
			active_el.remove();
			dispatch("saveDraftContent");
			commit("setActiveDraftType", null);
		}
	}
};
