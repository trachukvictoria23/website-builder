<template>
	<form class="registration" @submit.prevent="submit">
		<button class="registration__back" @click.prevent="$router.go(-1)">
			Back
		</button>
		<div class="login__item">
			<label for="email">*{{ $t('email') }}:</label>
			<input
				name="email"
				v-model="email"
				ref="1"
				:class="{ 'input-error': $v.email.$error }"
				@click="focusedInput = 1"
			/>
		</div>
		<div class="login__item">
			<label for="password">*{{ $t('password') }}:</label>
			<input
				name="password"
				v-model="password"
				type="password"
				ref="2"
				:class="{ 'input-error': $v.password.$error }"
				@click="focusedInput = 2"
			/>
		</div>
		<div class="login__item">
			<label for="confirm-password">*{{ $t('confirmPassword') }}:</label>
			<input
				name="confirm-password"
				v-model="confirmPassword"
				type="password"
				ref="3"
				:class="{ 'input-error': $v.confirmPassword.$error }"
				@click="focusedInput = 3"
			/>
		</div>

		<div class="login__item">
			<label for="phone">*{{ $t('phone') }}:</label>
			<input
				name="phone"
				v-model="phone"
				v-mask="phoneMask"
				masked="true"
				ref="4"
				placeholder="+38(XXX)XXX-XX-XX"
				:class="{ 'input-error': $v.phone.$error }"
				@click="focusedInput = 4"
			/>
		</div>

		<button class="registration__submit">
			{{ $t('register') }}
		</button>
	</form>
</template>

<script>
	import { required, minLength } from 'vuelidate/lib/validators';
	import focusMixin from '@/mixins/focusMixin';

	export default {
		data() {
			return {
				email: '',
				password: '',
				confirmPassword: '',
				phone: '',
				phoneMask: '+38(###)-###-##-##',
			};
		},
		mixins: [focusMixin],
		validations: {
			email: {
				required,
			},
			password: {
				required,
			},
			confirmPassword: {
				required,
			},
			phone: {
				required,
			},
		},
		methods: {
			submit() {
				this.$v.$touch();
				if (this.$v.$invalid) return;
				this.$router.push({ name: 'Home' });
			},
		},
	};
</script>

<style lang="scss" scoped>
	@import '~@/assets/style/login.scss';

	.registration {
		width: 512px;
		padding: 24px;
		/*height: 512px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;*/
		background: lightblue;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translateX(-50%) translateY(-50%);
	}
</style>
