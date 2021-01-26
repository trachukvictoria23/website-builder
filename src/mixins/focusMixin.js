export default {
	created() {
		window.addEventListener('keyup', this.keyEvents);
	},
	beforeDestroy() {
		window.removeEventListener('keyup', this.keyEvents);
	},
	mounted() {
		setTimeout(() => {
			this.$refs[this.focusedInput]?.focus();
		}, 100);
	},
	data() {
		return {
			focusedInput: 1,
		};
	},
	methods: {
		keyEvents(e) {
			e.stopPropagation();
			let refs = Object.keys(this.$refs);
			const refsLength = refs.length;
			if (e.key === 'ArrowDown' || (!e.shiftKey && e.key === 'Tab')) {
				e.preventDefault();
				if (this.focusedInput < refsLength) {
					this.focusedInput++;
				} else {
					this.focusedInput = 1;
				}
			}
			if (e.key === 'ArrowUp' || (e.shiftKey && e.key === 'Tab')) {
				e.preventDefault();
				if (this.focusedInput > 1) {
					this.focusedInput--;
				} else {
					this.focusedInput = refsLength;
				}
			}

			this.$refs[this.focusedInput].focus();
		},
	},
};
