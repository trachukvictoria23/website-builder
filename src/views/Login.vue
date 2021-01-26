<template>
	<div class="login">
		<div class="login__item">
			<label for="email">{{ $t('email') }}:</label>
			<input
				name="email"
				v-model="email"
				:class="{ 'input-error': $v.email.$error }"
			/>
		</div>
		<div class="login__item">
			<label for="password">{{ $t('password') }}:</label>
			<input
				name="password"
				v-model="password"
				type="password"
				:class="{ 'input-error': $v.password.$error }"
			/>
		</div>

		<button class="login__submit" @click="submit">{{ $t('logIn') }}</button>
		<button class="login__register" @click="registration">{{ $t('register') }}</button>
	</div>
</template>

<script>
	import { required, minLength } from 'vuelidate/lib/validators';

	export default {
		data() {
			return {
				email: '',
				password: '',
			};
		},
		validations: {
			email: {
				required,
			},
			password: {
				required,
			},
		},
		methods: {
			submit() {
				this.$v.$touch();
				if (this.$v.$invalid) return;
				console.log('submit', this.email, this.password);
			},
			registration() {},
		},
	};
</script>

<style lang="scss">
	.login {
		width: 512px;
		height: 512px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background: lightblue;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translateX(-50%) translateY(-50%);
		&__item {
			display: flex;
			flex-direction: column;
			label {
				margin-bottom: 4px;
			}
			input {
			}
		}
		&__submit {
			width: 144px;
			height: 40px;
		}
	}
</style>
