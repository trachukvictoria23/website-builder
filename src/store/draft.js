export default {
	state: {
		active_draft_id: null,
		active_draft_type: 'Text',
		elements_draft: [],
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
	actions: {
		addNewBlock({ state, dispatch }) {
			const main = document.getElementById('main');
			const new_el = document.createElement('div');
			const new_id = Math.random()
				.toString(36)
				.substr(2, 9);
			const default_styles =
				'width: 100%; height: 512px; border-bottom: 1px solid';
			new_el.setAttribute('id', new_id);
			new_el.setAttribute('style', default_styles);
			new_el.addEventListener('click', function(e) {
				dispatch('setActiveElement', e.target);
			});
			main.appendChild(new_el);
			//state.elements_draft.push(new_el);
		},
		setActiveElement({ commit }, target) {
			let target_block_type = target.tagName.toLocaleLowerCase();
			if (target_block_type === 'div') target_block_type = 'block';
			commit('setActiveDraftId', target.id);
			commit('setActiveDraftType', target_block_type);
		},
		setActiveElementHeight({ state }, height) {
			const active_el = document.getElementById(state.active_draft_id);
			active_el.style.height = height + 'px';
		},
	},
};
