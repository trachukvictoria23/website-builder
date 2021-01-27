export default {
	state: {
		active_draft_id: null,
        active_draft_type: null
	},
	getters: {
		getActiveDraftId(state) {
			return state.active_draft_id;
		},
		getActiveDraftType(state) {
			return state.active_draft_type;
		},
	},
	mutations: {
		setActiveDraftId(state, payload) {
			state.active_draft_id = payload;
		},
		setActiveDraftType(state, payload) {
			state.active_draft_type = payload;
		},
	},
	actions: {},
};
