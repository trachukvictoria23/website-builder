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
		setActiveDraftId(state, payload) {
			state.active_draft_id = payload;
		},
		setActiveDraftType(state, payload) {
			state.active_draft_type = payload;
		},
		saveDraftContent(state, payload) {
			state.draft_content = payload;
		}
	},
	actions: {
		addNewBlock({ state, dispatch }) {
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
				dispatch("setActiveElement", e.target);
			});
			main.appendChild(new_el);
			//state.elements_draft.push(new_el);
		},
		addNewHeading({ state, dispatch }) {
			const active_block = document.getElementById(state.active_draft_id);
			const new_el = document.createElement("h1");
			const new_id = Math.random()
				.toString(36)
				.substr(2, 9);
			new_el.setAttribute("id", new_id);
			new_el.innerHTML = "Heading";
			new_el.addEventListener("click", function(e) {
				dispatch("setActiveElement", e.target);
			});
			active_block.appendChild(new_el);
		},
		setActiveElement({ commit }, target) {
			let tag = target.tagName.toLocaleLowerCase();
			let target_block_type = null;
			if (tag === "div") target_block_type = "block";
			if (tag === "h1") target_block_type = "text";
			commit("setActiveDraftId", target.id);
			commit("setActiveDraftType", target_block_type);
		},
		setActiveElementHeight({ state }, height) {
			const active_el = document.getElementById(state.active_draft_id);
			active_el.style.height = height + "px";
		},
		setActiveHeading({ state }, heading) {
			const active_el = document.getElementById(state.active_draft_id);
			active_el.innerHTML = heading;
		},
		setActiveElementFontSize({ state }, fontSize) {
			const active_el = document.getElementById(state.active_draft_id);
			active_el.style.fontSize = fontSize + "px";
		}
	}
};
